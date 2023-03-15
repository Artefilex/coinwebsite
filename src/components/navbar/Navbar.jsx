import {useState} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'

import './navbar.css'
import logo from "../../assets/logo.svg"
// BEM Block Element Modifier

const Menu = () =>(
  <>
  <p><a href="#home"> Home</a></p>
  <p><a href="#wgpt3"> What is GBT3?</a></p>
  <p><a href="#possibility"> Open AI</a></p>
  <p><a href="#features"> Case Studies</a></p>
  <p><a href="#blog"> Library</a></p>
  </>
)


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='gbt3__navbar'>
      <div className='gbt3__navbar-links'>
        <div className='gbt3__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gbt3__navbar-links_container'>
        <Menu/>
        </div>
      </div>
      <div className='gbt3__navbar-sign'>
        <p>Sign in</p>
        <button > Sign up</button>
      </div>
      <div className='gbt3__navbar-menu'></div>
     {toggleMenu  
     ? <RiCloseLine color = "#fff" size = {27} onClick ={()=> setToggleMenu(false)} /> 
     : <RiMenu3Line color = "#fff" size = {27} onClick ={()=> setToggleMenu(true)} />
    }
    {toggleMenu && (
      <div className='gbt3__navbar-menu_container scale-up-center'>
        <div className='gbt3__navbar-menu_container-links'>
          <Menu/>
          <div className='gbt3__navbar-menu_container-links_sigin'>
            <p>Sign in</p>
        <button > Sign up</button>
      </div>
        </div>
      </div>
    )}

    </div>
  )
}

export default Navbar