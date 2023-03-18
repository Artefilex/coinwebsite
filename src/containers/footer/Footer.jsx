import React from 'react'
import './footer.css'
import gbt3Logo from "../../assets/logo.svg"
const Footer = () => {
  return (
    <div className='gbt3__footer section__padding'>
      <div className="gbt3__footer-heading">
        <h1 className='gradient__text'>Do you want to step in to future before others </h1>
      </div>
      <div className='gbt3__footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className='gbt3__footer-links'>
        <div className="gbt3__footer-links_logo">
          <img src={gbt3Logo} alt="gbt3Logo" />
          <p> Salköprü Mah. Çorbacı Sokak Ağbaba Sitesi A1 Blok No 19 Kat 1</p>
        </div>
        <div className='gbt3__footer-links_div'>
          <h4> Links</h4>
          <p> Overons</p>
          <p>Social Media</p>
          <p>Conunters</p>
          <p>Contact</p>
        </div>
        <div className='gbt3__footer-links_div'>
          <h4> Company</h4>
          <p> Terms & Conditions</p>
          <p>Privaciy Policy</p>
          <p>Contact</p>
         
        </div>
        <div className='gbt3__footer-links_div'>
          <h4>Get it touch</h4>
          <p> </p>
          <p>Crechternwoord K12 182 DK Alnknjcb</p>
          <p>085-132567</p>
          <p>info@payment.net</p>
        </div>
      </div>
      <div className='gbt3__footer-copyright'>
        <p>©2023 GBT-3. All right reserved.</p>
      </div>
    </div>
  )
}

export default Footer