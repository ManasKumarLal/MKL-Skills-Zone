import React from 'react'

export default function Cards() {
  return (
    <div className='w-full'>
      <div className='max-w-[1300px]  mx-auto md:grid grid-cols-3 gap-6 py-[80px]'>
        <div className='h-[570px] shadow-xl shadow-black rounded-xl flex flex-col items-center relative my-[80px] mx-[3%]'>
            <img className='w-24 absolute -top-14' src="http://localhost:3001/static/media/single.20196aa3e7e7fa48f8f7.png" alt="" />
            <h2 className='mt-[70px] text-[30px] font-bold text-center'>Web Development</h2>
            <h1 className='my-4 text-4xl font-bold'>$149</h1>
            <p className='w-[80%] text-center font-semibold border-b-2 mt-3 py-2'>Lorem ipsum dolor sit</p>
            <p className='w-[80%] text-center font-semibold border-b-2 mt-3 py-2'>Lorem ipsum dolor sit amet consectetur maksd sddk dfsddfsd.</p>
            <p className='w-[80%] text-center font-semibold border-b-2 mt-3 py-2'>Lorem ipsum dolor sit amet</p>
            <button className='bg-[#00DF9A] py-3 px-16 rounded-md my-12'>Start Trial</button>
        </div>
        <div className='h-[600px] shadow-2xl shadow-black rounded-xl flex flex-col items-center relative my-[80px] mx-[3%] bg-[#F3F4F6]'>
            <img className='w-24 absolute -top-14' src="http://localhost:3001/static/media/double.8be045e6bb88be63d414.png" alt="" />
            <h2 className='mt-[70px] text-[30px] font-bold text-center'>Digital Marketing</h2>
            <h1 className='my-4 text-4xl font-bold'>$149</h1>
            <p className='w-[80%] text-center font-semibold border-b-2 mt-3 py-2'>Lorem ipsum dolor sit</p>
            <p className='w-[80%] text-center font-semibold border-b-2 mt-3 py-2'>Lorem ipsum dolor sit amet consectetur maksd sddk dfsddfsd.</p>
            <p className='w-[80%] text-center font-semibold border-b-2 mt-3 py-2'>Lorem ipsum dolor sit amet</p>
            <button className='bg-black text-[#00DF9A] py-3 px-16 rounded-md my-20'>Start Trial</button>
        </div>
        <div className='h-[570px] shadow-xl shadow-black rounded-xl flex flex-col items-center relative my-[80px] mx-[3%]'>
            <img className='w-24 absolute -top-14' src="http://localhost:3001/static/media/triple.4eb8f19f4b4647321484.png" alt="" />
            <h2 className='mt-[70px] text-[30px] font-bold text-center'>App Development</h2>
            <h1 className='my-4 text-4xl font-bold'>$149</h1>
            <p className='w-[80%] text-center font-semibold border-b-2 mt-3 py-2'>Lorem ipsum dolor sit</p>
            <p className='w-[80%] text-center font-semibold border-b-2 mt-3 py-2'>Lorem ipsum dolor sit amet consectetur maksd sddk dfsddfsd.</p>
            <p className='w-[80%] text-center font-semibold border-b-2 mt-3 py-2'>Lorem ipsum dolor sit amet</p>
            <button className='bg-[#00DF9A] py-3 px-16 rounded-md my-12'>Start Trial</button>
        </div>
      </div>
    </div>
  )
}
