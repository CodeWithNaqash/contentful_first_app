import Image from 'next/image';
import Link from 'next/link';

const getBlog = async () => {
  const response = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=blog2`,
    { cache: 'no-store' }
  );
  if (!response.ok) {
    throw new Error('Failed to fetch Data');
  }

  const data = await response.json();
  return data;
};
const Blog = async () => {
  const posts = await getBlog();
  return (
    <div className="max-w-5xl mx-auto pt-10 ">
      <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 content-center justify-center">
        {posts.items.map((item: any) => (
          <div
            className="bg-slate-300 p-5 rounded-xl text-center space-y-5 shadow-xl"
            key={item.sys.id}
          >
            {/* Image */}
            <div className="">
              {posts.includes.Asset.map((a: any) => (
                <div key={a.sys.id}>
                  {item.fields.img.sys.id == a.sys.id ? (
                    <Image
                      src={`https:${a.fields.file.url}`}
                      alt="Image Loading"
                      width={1000}
                      height={1000}
                      className="rounded-xl max-h-40 object-cover"
                    />
                  ) : (
                    <div></div>
                  )}
                </div>
              ))}
            </div>
            {/* Image */}
            {/* title */}
            <div>
              <h2 className="text-xl font-semibold">{item.fields.title}</h2>
            </div>
            {/* title */}
            {/* Author */}
            {posts.includes.Entry.map((auth: any) => (
              <div className="text-gray-500 font-serif" key={auth.sys.id}>
                Author: {auth.fields.name}
              </div>
            ))}
            {/* Author */}
            {/* Link */}
            <div className="">
              <Link
                className="bg-red-300 text-sm px-8 py-3 rounded-md"
                href={`/blog/${item.fields.slug}`}
              >
                Read More...
              </Link>
            </div>
            {/* Link */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
