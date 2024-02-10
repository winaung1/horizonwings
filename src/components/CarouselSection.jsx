import React, { useEffect, useState } from 'react'
import { Button } from '../Button';
import img1 from '../images/purepng 2.png'
import img2 from '../images/bannerdrone.png'
import img3 from '../images/bannerdrone3.png'
import { BannerImageRender } from './BannerImageRender';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export const CarouselSection = () => {

const slides = [
    {id:0, url: 'https://images.pexels.com/photos/2050718/pexels-photo-2050718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', p: 'Triple-Lens Camera Drone', h1: 'DJI MAVIC 3 PRO', p2: 'Inspiration in Focus'},
    {id:1, url: 'https://images.pexels.com/photos/1087180/pexels-photo-1087180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', p: 'Triple-Lens Camera Drone', h1: 'DJI MAVIC 88 PRO', p2: 'Inspiration in Focus'},
    {id: 2, url: 'https://images.pexels.com/photos/9443065/pexels-photo-9443065.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', p: 'Triple-Lens Camera Drone', h1: 'DJI MAVIC 009 PRO', p2: 'Inspiration in Focus'},
]

const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };


  return (
    <div className="w-full flex relative text-white">
        {slides.map(slide => {
            if(slide.id === currentIndex){
                return <BannerImageRender slide={slide} currentIndex={currentIndex}/>
            }
})}
        <div className='flex justify-between absolute top-80 w-full px-4'>
        <FaArrowLeft onClick={goToPrevious} className='text-white w-10 h-10 p-2 rounded-xl cursor-pointer hover:bg-white/40'/>
        <FaArrowRight onClick={goToNext} className='text-white w-10 h-10 p-2 rounded-xl cursor-pointer hover:bg-white/40'/>
    </div>
    </div>


  )
}

