import React, { useState } from 'react'
import { Button } from '../Button'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
export const BannerImageRender = ({slide, currentIndex}) => {

    const styleImg = {
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${slide.url})`,
        zIndex: '1000px'
    }
  return (
    <div style={styleImg} className='fade relative -translate-y-20'>
        <div className='w-full z-[1000] h-screen bg-black/60'></div>
    <div className='z-[2000] absolute w-full top-40 left-0'>
      <div className=''>
        <h1 className='text1 updown'>{slide.p}</h1>
        <p className={`text2 updown2 text-2xl md:text-5xl font-[rowdies] py-6 md:py-3`}>{slide.h1}</p>
        <p className={`text3 updown3`}>{slide.p2}</p>
      </div>
      <div className={`text4 updown4 flex justify-center space-x-4 my-4`}>
        <Button name={'Order Now'} bgcolor={'bg-[#219AB3]'} textcolor={'text-white'}/>
        <Button name={'See More'} bgcolor={'bg-transparent'} textcolor={'text-white border border-gray'}/>
      </div>
    </div>
    {/* <img className='pt-60 transition-all duration-200 mx-auto' src={slide.url} alt="" /> */}
    
  </div>

  )
}
