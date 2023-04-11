import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';

const getSinglePost = async ({ slug }: { slug: string }) => {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=blog2&fields.slug=${slug}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  return data;
};
const SinglePost = async ({ params }: { params: { slug: string } }) => {
  const post = await getSinglePost(params);
  return (
    <div className="max-w-5xl m-auto">
      {post.items.map((item: any) => (
        <div key={item.sys.id}>
          {
            <div className=" text-center text-4xl font-semibold m-5">
              {item.fields.title}
            </div>
          }
          {/* Author */}
          <div className=" text-center">
            {post.includes.Entry.map((auth: any) => (
              <div className="text-gray-500 font-serif py-3" key={auth.sys.id}>
                Author: {auth.fields.name}
              </div>
            ))}
          </div>
          {/* Author */}
          {/* Image */}
          <div className="">
            {post.includes.Asset.map((a: any) => (
              <div className="flex justify-center" key={a.sys.id}>
                {/* Title */}
                {item.fields.img.sys.id == a.sys.id ? (
                  <Image
                    src={`https:${a.fields.file.url}`}
                    alt="Image Loading"
                    width={700}
                    height={700}
                    className="rounded-xl object-cover"
                  />
                ) : (
                  <div></div>
                )}
                {/* Title */}
              </div>
            ))}
          </div>
          {/* Image */}
          {/* Description */}
          <div className="text-center max-w-4xl mx-auto my-10">
            {documentToReactComponents(item.fields.description)}
          </div>
          {/* Description */}
        </div>
      ))}
    </div>
  );
};

export default SinglePost;
