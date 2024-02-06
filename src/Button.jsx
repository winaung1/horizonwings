import React from 'react'

export const Button = ({bgcolor, name, textcolor}) => {
  return (
    <button className={`${name} ${bgcolor} ${textcolor} rounded-xl px-3 py-2`}>{name}</button>
  )
}
