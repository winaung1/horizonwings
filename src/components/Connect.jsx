import React from 'react'
import {CiHeart, CiLocationOn, CiSearch} from 'react-icons/ci'
import {TbDrone} from 'react-icons/tb'
import img3 from '../images/purepng 2.png'
export const Connect = () => {
  const items = [
    {id: 1, name: 'Search Provider', icon: <CiSearch/>},
    {id: 2, name: 'Get Service Holder', icon: <CiLocationOn/>},
    {id: 3, name: 'Book The Drine', icon: <TbDrone/>},
    {id: 4, name: 'Enjoy The Service', icon: <CiHeart/>},
  ]
  return (
    <div className='max-w-7xl mx-auto bg-black px-10 2xl:rounded-tl-[40px] 2xl:rounded-br-[40px] 2xl:rounded'>
      <h4 className='text-white text-xl border-b border-blue text-center py-4 w-60 mx-auto'>How To Connect</h4>
      <div className='flex justify-center'>
        <div className='grid grid-cols-2 gap-4 p-4 py-10'>
          {items.filter(item => item.id !== 3).map(item => {
            return <div key={item.id} className='bg-white text-center rounded-xl h-40 w-full p-2 flex items-center justify-center flex-col'>
              <div className='text-4xl'>{item.icon}</div>
              <p className='text-xl py-3'>{item.name}</p>
            </div>
          })}

          {items.filter(item => item.id === 3).map(item => {
            return <div key={item.id} className='bg-blue text-white text-center rounded-xl h-40 w-full p-2 flex items-center justify-center flex-col'>
              <div className='text-4xl'>{item.icon}</div>
              <p className='text-xl py-3'>{item.name}</p>
            </div>
          })}
        </div>
        <img className='hidden md:block w-[400px] lg:w-[500px]' src={img3} alt="" />
      </div>
    </div>
  )
}
