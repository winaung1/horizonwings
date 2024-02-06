import React from 'react'

export const Subscribe = () => {
  return (
    <div className='pb-10 px-16 text-center max-w-7xl mx-auto'>
      <h1 className='text-4xl'>Join for the new arrival of drones</h1>
      <h3 className='text-gray text-2xl py-2'>We are thrilled to show you our upcoming drones</h3>
      <div className='relative w-fit mx-auto'>
        <input className='bg-white rounded-full drop-shadow-2xl w-full md:w-[600px] h-20 px-10 text-xl outline-none my-4' type="text" placeholder='Please enter your emil'/>
        <button className='w-full md:absolute z-10 right-0 top-4 bg-black text-white rounded-full drop-shadow-xl md:w-44 text-xl h-14 md:h-20 px-4'>Subscribe</button>
      </div>
    </div>
  )
}
