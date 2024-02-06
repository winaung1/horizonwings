import React from 'react'
import logo from '../images/logo.png'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'
export const Footer = () => {
  return (
    <div className='mx-w-7xl mx-auto py-10 px-10 2xk:px-0'>
      <div className='md:flex justify-between space-x-4'>
        <div className='flex flex-col items-center'>
          <img className='w-40 h-10 object-cover' src={logo} alt="" />
          <h1 className='text-2xl front-bold tracking-wider font-[rowdies]'>Horizon Wings</h1>
        </div>
        <div className='flex space-x-6 py-4 text-xl'>
          <BsFacebook/>
          <BsInstagram/>
          <BsTwitter/>
          <BsYoutube/>
        </div>
        <div className='md:flex md:space-x-10'>
          <ul className='leading-7 pt-4'>
            <h3 className='font-bold'>Address</h3>
            <li className='text-gray'>123 S 440 E</li>
            <li>Eastern Coast, USA</li>
          </ul>
          <ul className='leading-7 pt-4'>
            <h3 className='font-bold'>Phone</h3>
            <li className='text-gray'>18993827883</li>
          </ul>
          <ul className='leading-7 pt-4'>
            <h3 className='font-bold'>Hours</h3>
            <li className='text-gray'>Mon - Fri, 9am - 5pm</li>
          </ul>
        </div>
      </div>
      <h4 className='pt-10 text-center text-gray'>Copyright C Horizon Wings 2024</h4>
    </div>
  )
}
