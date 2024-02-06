import React from 'react'
import map from '../images/googlemaps.png'
export const Map = () => {
  return (
    <div className='max-w-7xl mx-auto  lg:px-10 my-10'>
      <img className='w-full lg:rounded-3xl h-40 object-cover' src={map} alt="" />
    </div>
  )
}
