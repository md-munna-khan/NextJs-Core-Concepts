"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathname= usePathname();
    console.log(pathname)
   return (
       <div className='w-full flex items-center justify-between px-6 py-3'>
           <div><Link href="/">Next js</Link></div>
           <div className='flex  space-x-4'>
               <Link href='/about'>About</Link>
               <Link href='/contact'>Contact</Link>
               <Link href='/posts'>Post</Link>
               <Link href='/gallery' className={`${
                pathname === "/gallery" ? "text-blue-400 font-semibold underline":"hover:underline"
                }`}>Gallery</Link>
               <Link href='/products' className={`${
                pathname === "/products"? "text-blue-400 font-semibold underline":"hover:underline"
               }`}>Products</Link>
           </div>
       </div>
   );
};

export default Navbar;