import React from 'react'
import Tilt from 'react-parallax-tilt';
import './logo.css'
import brain from './brain.png'
const Logo = () => {
  return (
    <div className='ma-4 mt-0'>
        <Tilt className='tilt br2 shadow-2'>
            <div className='pa-3'>
                <img style={{padding:'9px'}} src={brain} alt="logo" />
            </div>
        </Tilt>
    </div>
  )
}

export default Logo