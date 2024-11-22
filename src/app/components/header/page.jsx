"use client";


import React from 'react'
import { useRouter } from 'next/navigation';

// use useRouter for button navigation
// use <Link> for linking the page


const Header = () => {

  const router=useRouter();
  return (
    <div className='flex items-end justify-between  bg-[#1c1c1c]'>
        <h1 className='text-2xl font-bold'>Hello <br/><span className='text-3xl font-semibold'>Welcome</span> </h1>
      <button onClick={()=>router.push("/")} className='text-xl font-extrabold px-3 py-2 rounded-xl bg-red-600 '>Log Out</button>
      
    </div>
  )
}

export default Header