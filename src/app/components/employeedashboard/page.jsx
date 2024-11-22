"use client"
import React from 'react'
import Header from '../header/page'









const EmployeeDashboard = () => {
    return (
        <div className='p-10 bg-[#1c1c1c] h-screen w-screen text-white '>
            <Header />
            <div className='flex w-full justify-between gap-5 mt-10 '>
                <div className=' h-40 w-[30%] bg-red-500 rounded-xl px-10 py-6'>
                    <h1 className='text-4xl font-semibold'>1</h1>
                    <h3 className='text-3xl font-semibold'>New Task</h3>
                </div>
                <div className=' h-40 w-[30%] bg-orange-400 rounded-xl px-10 py-6'>
                    <h1 className='text-4xl font-semibold'>1</h1>
                    <h3 className='text-3xl font-semibold'>Completed Task</h3>
                </div>
                <div className=' h-40 w-[30%] bg-blue-400 rounded-xl px-10 py-6'>
                    <h1 className='text-4xl font-semibold'>1</h1>
                    <h3 className='text-3xl font-semibold'>Accepted Task</h3>
                </div>
                <div className=' h-40 w-[30%] bg-green-400 rounded-xl px-10 py-6'>
                    <h1 className='text-4xl font-semibold'>1</h1>
                    <h3 className='text-3xl font-semibold'>Failed Task</h3>
                </div>
            </div>

            <div id="taskList" className='h-[55%] w-full py-5 mt-10 flex items-center justify-start gap-5 flex-nowrap overflow-x-auto '>
                <div className='flex-shrink-0 h-[300px] w-[300px] bg-pink-400 rounded-xl p-5 overflow-auto ' id="taskList">
                    <div className='flex justify-between items-center'>
                        <h1 className='bg-red-600 text-sm px-3 py-1 rounded font-semibold'>Category</h1>
                        <h4 className='font-semibold'>11/12/2024</h4>
                    </div>
                    <h2 className='text-xl font-semibold mt-5'>Title</h2>
                    <p className='mt-3 font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium necessitatibus minus quibusdam iste tenetur veniam corporis maiores, facere corrupti dolor neque autem dicta, beatae ea officiis accusamus vel molestiae quod?</p>
                    <div className='flex justify-between mt-4'>

                    </div>
                </div>
                <div className='flex-shrink-0 h-[300px] w-[300px] bg-emerald-400 rounded-xl p-5 overflow-auto' id="taskList">
                    <div className='flex justify-between items-center'>
                        <h1 className='bg-red-600 text-sm px-3 py-1 rounded font-semibold'>Category</h1>
                        <h4 className='font-semibold'>Date</h4>
                    </div>
                    <h2 className='text-xl font-semibold mt-5'>Title</h2>
                    <p className='mt-3 font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae commodi sequi dignissimos vitae tempore. Nisi a tempore dolores, magnam eveniet facere minus qui. Voluptatibus eius fugiat sint asperiores quisquam? Vitae.</p>

                </div>
                <div className='flex-shrink-0 h-[300px] w-[300px] bg-yellow-400 rounded-xl p-5 overflow-auto' id="taskList">
                    <div className='flex justify-between items-center'>
                        <h1 className='bg-red-600 text-sm px-3 py-1 rounded font-semibold'>Category</h1>
                        <h4 className='font-semibold'>23/05/2024</h4>
                    </div>
                    <h2 className='text-xl font-semibold mt-5'>Title</h2>
                    <p className='mt-3 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi unde repellendus deserunt dolore voluptatem commodi aut magni suscipit esse quod adipisci, dolor incidunt id! Cupiditate minima adipisci placeat perspiciatis voluptas.</p>

                </div>
                <div className='flex-shrink-0 h-[300px] w-[300px] bg-red-400 rounded-xl p-5 overflow-auto' id="taskList">
                    <div className='flex justify-between items-center'>
                        <h1 className='bg-red-600 text-sm px-3 py-1 rounded font-semibold'>Category</h1>
                        <h4 className='font-semibold'>Date</h4>
                    </div>
                    <h2 className='text-xl font-semibold mt-5'>Title </h2>
                    <p className='mt-3 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam fuga nobis natus unde ea magnam aliquid laboriosam quis nisi eaque perspiciatis reprehenderit magni rem, libero, et quod eveniet voluptas officia.ajdhaoh adoajdad adnaihdoandlk  adoiajdjadoiajd</p>

                </div>










            </div>




        </div>
    )
}

export default EmployeeDashboard