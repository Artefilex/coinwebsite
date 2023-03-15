import React from 'react'
import { Feature } from '../../components'
import './whatGBT3.css'
const WhatGBT3 = () => {
  return (
    <div className='gbt3__whatgbt3 section__margin' id='wgpt3'>
     <div className='gbt3__whatgbt3-feature'>
      <Feature/>
     </div>
     <div className='gbt3__whatgbt3-heading '>
      <h1 className='gradient-text'> The possibilties are beyond your imagination</h1>
      <p >  Explore The Library</p>
     </div>
     <div className='gbt3__whatgbt3-container '>
     <Feature/>
     <Feature/>
     <Feature/>
     </div>
    </div>
  )
}

export default WhatGBT3