 import Image from 'next/image';
import React from 'react';
// import nextImg from '../../assets/nextjs3.webp'
import nextImg from '@/assets/nextjs3.webp'

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