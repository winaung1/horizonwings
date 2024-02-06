import React from 'react'
import { VideoCard } from './VideoCard'
import video1 from '../images/ga1.png'
import video2 from '../images/gal2.jpeg'
import video3 from '../images/gal3.jpeg'
import video4 from '../images/gal2.jpeg'
export const DroneProject = () => {
  return (
    <div className='max-w-7xl mx-auto text-center py-10 px-8 2xl:p-0'>
      <h1 className='text-4xl'>Drones Project Views</h1>
      <h3 className='text-gray text-2xl py-2'>Check out the view of these amazing videos</h3>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 py-10 gap-4'>
        <VideoCard img={video1} colSpan={'col-span-1'} size={'h-80 object-cover w-full lg:w-[400px]'}/>
        <VideoCard img={video2} colSpan={'col-span-1'} size={'h-80 object-cover w-full lg:w-[400px]'}/>
        <VideoCard img={video3} colSpan={'col-span-1'} size={'h-80 object-cover w-full lg:w-[400px]'}/>
        <VideoCard img={video4} colSpan={'lg:col-span-3'} size={'h-80 object-cover w-full'}/>
      </div>
    </div>
  )
}
