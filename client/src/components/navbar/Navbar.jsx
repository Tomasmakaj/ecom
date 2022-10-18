import React, { useState } from 'react'

import './Navbar.css'

import {GiTakeMyMoney} from 'react-icons/gi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {HiOutlineMenuAlt4, HiShoppingCart} from 'react-icons/hi'

const Navbar = ({isLoginPop, setIsLoginPop, makePopup,}) => {
     
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    // let testBoolean = false

    function handleLoginClick() {

        makePopup()
        
        // console.log(isLoginPop
        // testBoolean = !testBoolean
        console.log("loginPop", isLoginPop)
    }

  return (
    <div className='navbar'>
        <div className='container'>
        <h1><span><GiTakeMyMoney /> The</span> Hype Hut</h1>
        <div className='button-container'>
        <button className='btn1' onClick={handleLoginClick}>Sign In</button>
            <ul className= {click ? 'nav-menu active' : 'nav-menu'} >
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Cart</a></li>
                {/* <li><a href='#'>Contact</a></li> */}
            </ul>
            
        </div>
      
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
            
            </div>
        </div>

    </div>
  )
}

export default Navbar