import React, { useContext } from 'react'
import logo from '../images/logo.png'
import {IoCloseSharp} from 'react-icons/io5'
import { AppContextProvider } from '../App'
export const Sidebar = () => {
  const {showSideBar, setShowSideBar} = useContext(AppContextProvider)
  const handleClickSideBar = () => {
    setShowSideBar(false)
  }
  return (
    <>
    <div className={showSideBar ? 'lg:hidden fixed top-0 left-0 min-h-screen bg-white w-60 z-[2000] flex flex-col transition-all duration-300 ease-linear' : ' fixed top-0 -left-80 min-h-screen bg-white w-60 z-[2000] flex flex-col transition-all duration-300 ease-linear'}>
      <div className='w-full p-4 text-2xl flex items-center justify-between'>
        <div>
          <img className='w-24 h-10 object-cover' src={logo} alt="" />
          <h1 className='font-bold tracking-wider font-[rowdies]'>Horizon Wings</h1>
        </div>
        <button onClick={() => handleClickSideBar()}  className='font-extrabold text-2xl'><IoCloseSharp/></button>
      </div>
      <ul className='flex flex-col gap-10 px-6 text-xl py-10'>
          <li className='hover:text-blue cursor-pointer'>Home</li>
          <li className='hover:text-blue cursor-pointer'>Features</li>
          <li className='hover:text-blue cursor-pointer'>Pricing</li>
          <li className='hover:text-blue cursor-pointer'>Mission</li>
        </ul>
    </div>
    <div onClick={() => handleClickSideBar()} className={showSideBar && 'lg:hidden z-[1800] w-full inset-0 fixed bg-black/40'}/>
    </>
  )
}
