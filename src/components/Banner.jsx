import React from 'react'
import { Button } from '../Button'
import img1 from '../images/purepng 2.png'
import { CarouselSection } from './CarouselSection'


export const Banner = () => {
  return (
    <div className='banner min-h-screen flex py-20'>
      <CarouselSection/>
    </div>
  )
}
