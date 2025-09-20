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