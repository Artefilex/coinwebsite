import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
const Header = () => {
  return (
    <div className='gbt3__header section__padding' id='home'>
      <div className='gbt3__header-content'>
        <h1 className='gradient__text'> Let's Build Something amazing with GPT-3 OpenAI</h1>
        <p>
          Didn't you know you had that much power? You can move mountains. You can do anything. Trees live in your fan brush, but you have to scare them out. Just think about these things in your mind and drop em' on canvas
        </p>
        <div className='gbt3__header-content__input'>
          <input type="email" placeholder='Your E mail Adress' />
          <button type='button' > Get Started</button>
        </div>
        <div className='gbt3__header-content__people'>
          <img src={people} alt="people" />
          <p>1.600 people requested access a visit in last 24 hours</p>
        </div>
      
      </div>
      <div className='gbt3__header-image'>
          <img src={ai} alt="ai" />
        </div>
      
    </div>

  )
}

export default Header