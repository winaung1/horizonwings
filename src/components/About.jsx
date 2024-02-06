import React from 'react'
import img2 from '../images/mission.jpeg'
export const About = () => {
  return (
    <div className='px-8 py-10 max-w-7xl mx-auto md:flex md:space-x-8 2xl:px-0 items-center justify-center '>
      <img className='hidden md:block w-full object-cover lg:w-[400px] h-[400px] rounded-bl-[40px] rounded-tr-[40px]' src={img2} alt="" />
      <div className='lg:px-10'>
        <h1 className='text-5xl'>Horizon Wings Mission</h1>
        <p className='py-4 text-gray leading-7'>Welcome to FlightFly, where innovation 
        takes flight! We are at the forefront of revolutionizing the drone industry, 
        harnessing cutting-edge technology to redefine the possibilities of unmanned aerial 
        vehicles. As pioneers in the field, we specialize in delivering products, delivering unparalleled solutions for industries.
        Committed to excellence, FlightFly is dedicated to shaping the future of drones, providing our clients with precision, reliability, and efficiency. 
        Join us on the journey as we soar to new heights, unlocking the full potential of drone technology for a wide range of applications.
        </p>
      </div>
    </div>
  )
}
