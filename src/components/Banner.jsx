import React from 'react'
import { Button } from '../Button'
import img1 from '../images/purepng 2.png'
export const Banner = () => {
  return (
    <div className='banner min-h-screen flex py-20'>
      <div className='max-w-7xl mx-auto md:flex px-8 pt-20 md:pt-0 py-10 text-white items-center'>
        <div className='w-full lg:w-[550px]'>

          <div className=''>
            <h1 className='text-5xl uppercase font-[rowdies]'>Bringing flight to everyone</h1>
            <p className='py-6 text-3xl font-extralight lg:w-96'>with Horizon Wings there is possibility of getting it done.</p>
          </div>
          <div className='flex space-x-4'>
            <Button name={'Order Now'} bgcolor={'bg-blue'} textcolor={'text-white'}/>
            <Button name={'See More'} bgcolor={'bg-black'} textcolor={'text-white border border-gray'}/>
          </div>
        </div>
        <img className='shrink-0 md:w-[400px] lg"h-[420px] xl:w-[710px]' src={img1} alt="" />
      </div>
    </div>
  )
}
