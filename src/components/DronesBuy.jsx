import React from 'react'
import { DronesBuyCard } from './DronesBuyCard'

export const DronesBuy = () => {
  return (
    <div className='max-w-7xl mx-auto py-10 p-10 2xl:px-0 md:grid gap-8 md:grid-cols-2'>
      <DronesBuyCard bg={'bg-lightpink'}/>
      <DronesBuyCard bg={'bg-lightpurple'}/>
      <DronesBuyCard bg={'bg-blue'}/>
      <DronesBuyCard bg={'bg-yellow'}/>
      
    </div>
  )
}
