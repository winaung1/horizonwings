import React from 'react'
import drone from '../images/purepng 2.png'
import {BsCart} from 'react-icons/bs'
export const DronesBuyCard = ({bg}) => {
  return (
    <div className='py-4 drop-shadow-xl border-white w-full md:w-fit lg:flex lg:p-0 rounded-xl space-x-4'>
      <div className={`${bg} roundex-xl`}>
        <img className='w-809 h-40 object-contain mx-auto' src={drone} alt="" />
      </div>
      <div className='flex items-center lg:items-baseline justify-between'>
        <div className='py-4'>
          <h4 className='font-bold text-xl'>Standard Drone 2.0</h4>
          <p className='text-gray'>Let's start buying your dream machine and fly away.</p>
          <h3 className='font-bold text-xl'>$240</h3>
        </div>
        <div>
          <BsCart className='bg-blue text-white w-20 h-8 p-2 rounded-xl text-4xl lg:translate-y-32'/>
        </div>
      </div>
    </div>
  )
}
