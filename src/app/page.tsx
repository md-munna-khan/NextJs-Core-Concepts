import Navbar from '@/components/Navbar';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Navbar/>
     <div className=' text-center my-4'>
      <h1 className='text-4xl'>Next.js Font Optimization</h1>
      <p>Best Practice For Faster Loading</p>
     </div>
    </div>
  );
};

export default HomePage;