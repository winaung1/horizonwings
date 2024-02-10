import Carousel from 'react-bootstrap/Carousel';
import React, { useEffect, useState } from 'react'
import { Button } from '../Button';
import img1 from '../images/purepng 2.png'
import img2 from '../images/bannerdrone.png'
import img3 from '../images/bannerdrone3.png'
import { BannerImageRender } from './BannerImageRender';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


import 'animate.css';
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
    <div className='w-full text-white -translate-y-20 h-screen' style={{color: 'white'}} >
    <Carousel data-bs-theme="dark " className='' controls={false} indicators={false}>
      <Carousel.Item >
      <div className='w-full absolute z-[1000] h-full bg-black/60'></div>
        <img
          className="block w-full h-screen"
          src={slides[0].url}
          alt="First slide"

        />
        <Carousel.Caption class="text1 animate__animated animate__fadeInDown position-absolute top-40 z-[4000]" style={{color: 'white'}}>
            <div className='z-[2000] absolute w-full top-40 left-0'>
          <div className=''>
            <h1 className='text1 updown'>{slides[0].p}</h1>
            <p className={`text2 updown2 text-2xl md:text-5xl font-[rowdies] py-6 md:py-3`}>{slides[0].h1}</p>
            <p className={`text3 updown3`}>{slides[0].p2}</p>
          </div>
          <div className={`text4 updown4 flex justify-center space-x-4 my-4`}>
            <Button name={'Order Now'} bgcolor={'bg-[#219AB3]'} textcolor={'text-white'}/>
            <Button name={'See More'} bgcolor={'bg-transparent'} textcolor={'text-white border border-gray'}/>
          </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='w-full z-[1000] absolute h-full bg-black/60'></div>
        <img
          className="block w-full h-screen"
          src={slides[1].url}
          alt="Second slide"
        />
        <Carousel.Caption class="text1 animate__animated animate__fadeInDown position-absolute top-40 z-[4000]">
        <div className='z-[2000] absolute w-full top-40 left-0'>
          <div className=''>
            <h1 className='text1 updown'>{slides[1].p}</h1>
            <p className={`text2 updown2 text-2xl md:text-5xl font-[rowdies] py-6 md:py-3`}>{slides[1].h1}</p>
            <p className={`text3 updown3`}>{slides[1].p2}</p>
          </div>
          <div className={`text4 updown4 flex justify-center space-x-4 my-4`}>
            <Button name={'Order Now'} bgcolor={'bg-[#219AB3]'} textcolor={'text-white'}/>
            <Button name={'See More'} bgcolor={'bg-transparent'} textcolor={'text-white border border-gray'}/>
          </div>∏
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='w-full absolute z-[1000] h-full bg-black/60'></div>
        <img
          className="block w-full h-screen"
          src={slides[2].url}
          alt="Third slide"
        />
        <Carousel.Caption class="text2 animate__animated animate__fadeInDown position-absolute top-40 z-[4000]" style={{color: 'white'}}>
        <div className='z-[2000] absolute w-full top-40 left-0'>
          <div className=''>
            <h1 className='text1 updown'>{slides[2].p}</h1>
            <p className={`text2 updown2 text-2xl md:text-5xl font-[rowdies] py-6 md:py-3`}>{slides[2].h1}</p>
            <p className={`text3 updown3`}>{slides[2].p2}</p>
          </div>
          <div className={`text4 updown4 flex justify-center space-x-4 my-4`}>
            <Button name={'Order Now'} bgcolor={'bg-[#219AB3]'} textcolor={'text-white'}/>
            <Button name={'See More'} bgcolor={'bg-transparent'} textcolor={'text-white border border-gray'}/>
          </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
 
    </div>
  
  )
}

