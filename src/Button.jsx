import React from 'react'

export const Button = ({bgcolor, name, textcolor}) => {
  return (
    <button className={`${name} ${bgcolor} ${textcolor} rounded-full px-5 py-2`}>{name}</button>
  )
}
