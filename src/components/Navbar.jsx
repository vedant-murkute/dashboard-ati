import React from 'react'
import { Websocket } from './Websocket'
import "./styles.css"

export const Navbar = () => {
  return (
    <div className='navbar'>
      <span>Dashboard</span>
      <Websocket></Websocket>
    </div>
  )
}
