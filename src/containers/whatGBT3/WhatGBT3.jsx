import React from 'react'
import { Feature } from '../../components'
import './whatGBT3.css'
const WhatGBT3 = () => {
  return (
    <div className='gbt3__whatgbt3 section__margin' id='wgpt3'>
     <div className='gbt3__whatgbt3-feature'>
      <Feature title= 'What is GPT-3' text="Didn't you know you had that much power? You can move mountains. You can do anything. Trees live in your fan brush, but you have to scare them out." />
     </div>
     <div className='gbt3__whatgbt3-heading '>
      <h1 className='gradient__text'> The possibilties are beyond your imagination</h1>
      <p >  Explore The Library</p>
     </div>
     <div className='gbt3__whatgbt3-container '>
     <Feature title='Chatbots' text="Didn't you know you had that much power? You can move mountains. You can do anything. Trees live in your fan brush," />
     <Feature title='Knowledgebase' text='Didn t you know you had that much power? You can move mountains. You can do anything. Trees live in your fan brush,' />
     <Feature title='Education' text='Didn t you know you had that much power? You can move mountains. You can do anything. Trees live in your fan brush,'/>
     </div>
    </div>
  )
}

export default WhatGBT3