"use client";
import React, { useState } from 'react'
import Header from '../header/page'
import Tasks from "../tasks/page"



const Page = () => {

    const [date, setDate] = useState('');
    const [asignTo, setAsignTo] = useState("");
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('');


    const submitHandler = (e) => {
        e.preventDefault();
        setDate('');
        setAsignTo("");
        setCategory("");
        setTitle("");
        setDescription("");

    }
    return (
        <div className='p-10 bg-[#1c1c1c] h-full w-screen text-white '>
            <Header/>
          
            <div className='p-5 bg-[#2c2c2c] mt-7 rounded'>
                <form className='flex items-start justify-between w-full flex-wrap' onSubmit={(e) => {
                    submitHandler(e)
                }}>
                    <div className='w-1/2'>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5 '>Date</h3>
                            <input type="date" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 '
                                value={date}
                                onChange={(e) => {
                                    setDate(e.target.value)
                                }} />
                        </div>
                        <div>
                            <h3>Asign to</h3>
                            <input type="text" placeholder="employee name" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 '
                                value={asignTo}
                                onChange={(e) => {
                                    setAsignTo(e.target.value)
                                }} />
                        </div>
                        <div>
                            <h3>Cateory</h3>
                            <input type="text" placeholder="design , dev, etc" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 '
                                value={category}
                                onChange={(e) => {
                                    setCategory(e.target.value)
                                }} />
                        </div>
                        <div>
                            <h3>Task Title</h3>
                            <input type="text" placeholder='make a ui design' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 '
                                value={title}
                                onChange={(e) => {
                                    setTitle(e.target.value)
                                }} />
                        </div>


                    </div>


                    <div className='w-1/2 flex flex-col items-start'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                        <textarea name="" id='' cols='50' row="40" className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value)
                            }}></textarea>
                        <button className='hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full bg-emerald-400 h-[40px]'>Create Task</button>
                    </div>

                </form>
            </div>
            <div className='bg-[#2c2c2c] p-5 w-full mt-7 rounded h-50   ' >
                <div className='bg-red-600 py-2 px-4 rounded-lg w-full flex justify-between mb-3'>
                    <h2 className='w-1/5 font-medium text-lg rounded-lg px-2 py-1 text-center'>Employee Name</h2>
                    <h3 className='w-1/5 font-medium text-lg rounded-lg px-2 py-1 text-center'> New Task</h3>
                    <h5 className='w-1/5 font-medium text-lg rounded-lg px-2 py-1 text-center'>Active Task</h5>
                    <h5 className='w-1/5 font-medium text-lg rounded-lg px-2 py-1 text-center'>Completed</h5>
                    <h5 className='w-1/5 font-medium text-lg rounded-lg px-2 py-1 text-center'>Failed</h5>


                </div>
            </div>
            <div className='h-full overflow-auto ' id="taskList">
               <Tasks/>
            </div>
        </div>
    )
}

export default Page