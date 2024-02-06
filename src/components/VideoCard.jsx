import React from 'react'
import {MdOutlinePlayCircle} from 'react-icons/md'
export const VideoCard = ({img, colSpan, size}) => {
  return (
    <div className={`${colSpan} relative`}>
      <img className={`rounded rounded-br-[44px] rounded-tl-[44px] w-full ${size}`} src={img} alt="" />
      <MdOutlinePlayCircle className='absolute w-full h-full inset-0 p-32 text-white'/>
    </div>
  )
}
