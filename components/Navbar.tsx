import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <header className="w-full bg-slate-300 py-10 sticky top-0 opacity-90">
      <nav className="flex justify-around items-center font-semibold text-2xl">
        <Link href={'/'}>Home</Link>
        <Link href={'/blog'}>Blog</Link>
      </nav>
    </header>
  );
};

export default Navbar;
