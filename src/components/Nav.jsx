import React, { useContext, useEffect, useState } from 'react'
import logo from '../images/navlogo.png'
import {BsCart} from 'react-icons/bs'
import { Button } from '../Button'
import {GiHamburgerMenu} from 'react-icons/gi'
import { AppContextProvider } from '../App'
export const Nav = () => {
  const [scrolled, setScrolled] = useState(false)
  const {setShowSideBar} = useContext(AppContextProvider)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 50){
        setScrolled(true)
      } else{
        setScrolled(false)
      }
    })
  })

  return (
    <div className={scrolled ? 'backdrop-blur-2xl z-[1000] fixed w-full py-4 top-0 transition-all duration-300 ease-linear bg-black/60' : ' z-[1000] fixed w-full py-4 top-0 transition-all duration-300 ease-linear bg-transparent'}>
      <div className='max-w-7xl px-5 mx-auto text-white flex items-center justify-between'>
        <div className='logo flex flex-col items-center'>
          <img className='w-40 h-10 object-cover' src={logo} alt="" />
          <h1 className='text-2xl font-bold tracking-wider font-[rowdies]'>Horizon Wings</h1>
        </div>
        <ul className='hidden md:flex items-center space-x-5 text-xl'>
          <li className='hover:text-blue cursor-pointer'>Home</li>
          <li className='hover:text-blue cursor-pointer'>Features</li>
          <li className='hover:text-blue cursor-pointer'>Pricing</li>
          <li className='hover:text-blue cursor-pointer'>Mission</li>
        </ul>
        <div className='hidden md:flex items-center space-x-4'>
          <BsCart className='text-2xl'/>
          <Button bgcolor={'bg-white'} textcolor={'text-black'} name={'Order Now'}/>
        </div>
        <GiHamburgerMenu onClick={() => setShowSideBar(true)} className='cursor-pointer md:hidden text-3xl'/>
      </div>
    </div>
  )
}
