"use client";
import React, { useState } from 'react';


import { useRouter } from 'next/navigation';



export default function Login() {

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  let submitHandler = (e) => {
    e.preventDefault();
    setEmail('')
    setPassword('')
  }

  const router = useRouter();

  const navigate = (tab) => {
    router.push(tab)

  }

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-[#1c1c1c] '>

      <div className='border-2 border-emerald-600 p-10 rounded-2xl shadow-2xl bg-[#2c2c2c]'>
        <h1 className='text-4xl text-white text-center mt-6 font-bold'>Login</h1>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className=' flex flex-col items-center justify-center p-10 '>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            required className="border-2 border-emerald-500 py-3 text-white px-5 outline-none rounded-full text-xl bg-transparent placeholder:text-white" type="email" placeholder='Enter your email' />

          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="border-2 border-emerald-500 py-3 text-white px-5 outline-none rounded-full text-xl bg-transparent placeholder:text-white mt-5" type="password" placeholder='Enter password' />

          <button className="border-2 border-emerald-500 py-3 text-white px-5 outline-none rounded-full text-xl bg-emerald-600 placeholder:text-white w-44 mt-10 font-semibold" >Login</button>
          

        </form>
        <div className='flex gap-10 justify-evenly '>
            <button onClick={() => {
              navigate("/components/admindashboard")
            }} className="border-2 border-emerald-500 py-1 text-white px-5 outline-none rounded-full text-xl bg-emerald-600 placeholder:text-white  mt-10 font-semibold " >Admin Dashboard</button>
            <button
              onClick={() => {
                navigate("/components/employeedashboard")
              }} className="border-2 border-emerald-500 py-1 text-white px-5 outline-none rounded-full text-xl bg-emerald-600 placeholder:text-white  mt-10 font-semibold" >Employee Dashboard</button>
          </div>

      </div>
    </div>
  )
}

