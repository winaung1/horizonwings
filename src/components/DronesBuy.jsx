import React from 'react'
import { DronesBuyCard } from './DronesBuyCard'

export const DronesBuy = () => {
  return (
    <div className='max-w-7xl mx-auto py-10 p-10 2xl:px-0 md:grid gap-8 md:grid-cols-2'>
      <DronesBuyCard bg={'bg-[#FBA1A1]'}/>
      <DronesBuyCard bg={'bg-lightpurple'}/>
      <DronesBuyCard bg={'bg-[#219AB3]'}/>
      <DronesBuyCard bg={'bg-[#FBF2A1]'}/>
      
    </div>
  )
}
