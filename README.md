# Next.js Core Concepts
In this module, we’ll dive into the core concepts of Next.js to take your skills to the next level. You’ll learn how to optimize images, fonts, and metadata for better performance and SEO, explore pre-rendering strategies like SSG, SSR, and ISR, and practice advanced data fetching techniques. We’ll also cover global error handling, active links, and wrap up with hands-on tasks to solidify your learning.

# Next.js Core Concepts part-1
## 52-1 Optimize image using Image Component
### external image use case
- first image using local image tag 
- 2nd image using nextjs image must be ad width and height and add src link next.config 
- next.config.ts
```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  // images: {
  //   remotePatterns: [new URL("https://images.prismic.io/staticmania/ZiT7AvPdc1huKqJS_Next.js.jpg?auto=format,compress")],
  // },
// if i am using 1 k image all image source adding is very boring  here is a update solution
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
     
      },
    ],
  },
};

export default nextConfig;

```
- gallery folder
```ts
import Image from 'next/image';
import React from 'react';

const GalleryPage = () => {
    return (
        <div className='text-center'>
       <h1>Regular Image Tag</h1>
       <img
       src="https://images.prismic.io/staticmania/ZiT7AvPdc1huKqJS_Next.js.jpg?auto=format,compress"
       width={500}
       height={500}
       className='mx-auto'
       />
        <h1>Next js image Component</h1>
        <Image 
            src="https://images.prismic.io/staticmania/ZiT7AvPdc1huKqJS_Next.js.jpg?auto=format,compress"
            alt='next image'
            width={500} 
            height={500}
            className=' mx-auto'
            />
            
        </div>
    );
};

export default GalleryPage;
```
- this is output nextjs is more fast change type name and also so fast mili second
![alt text](image.png)
 ### internal image use case
 ```ts
 import Image from 'next/image';
import React from 'react';
import nextImg from '../../../assets/nextjs3.webp'

const GalleryPage = () => {
    return (
        <div className='text-center'>
       <h1>Regular Image Tag</h1>
       <img
    //    src={nextImg} dont use as like not worked this
       src="https://images.prismic.io/staticmania/ZiT7AvPdc1huKqJS_Next.js.jpg?auto=format,compress"
       width={500}
       height={500}
       className='mx-auto'
       />
        <h1>Next js image Component</h1>
        <Image 
            src="https://images.prismic.io/staticmania/ZiT7AvPdc1huKqJS_Next.js.jpg?auto=format,compress"
            alt='next image'
            width={500} 
            height={500}
            className=' mx-auto'
            />
        <h1> local Next js image from assets Folder Component</h1>
        <Image 
        // must import from assets folder
            src={nextImg}
            alt='next image'
            width={500} 
            height={500}
            className=' mx-auto'
            />
        <h1> local Next js image from public Folder Component</h1>
        <Image 
            // src="/public/nextjs3.webp" / must be cancel /public and not need to import
            src="/nextjs3.webp"
            alt='next image'
            width={500} 
            height={500}
            className=' mx-auto'
            />
            
        </div>
    );
};

export default GalleryPage;
```