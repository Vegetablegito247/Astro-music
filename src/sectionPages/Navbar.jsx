import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../sectionPages/stylesSection/nav.css';

import { BiSolidUserCircle } from 'react-icons/bi';
import { BsFillRocketTakeoffFill, BsFillBagFill, BsFillCartFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

function Navbar() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const openModal = () => {
    setOpenSidebar(!openSidebar);
  };

  const [otherPop, setOtherPop] = useState(false);

  const openPop = () => {
    setOtherPop(!otherPop);
  };

  return (
    <nav className='nav'>
      <NavLink to='/' className="logo">
        <h3>Astro</h3>
        <BsFillRocketTakeoffFill className='navLogo' />
      </NavLink>

      <div className={openSidebar ? 'sideBar active' : 'sideBar'}>
        <div className="close" onClick={openModal}>
          <AiOutlineClose className='x-mark' />
        </div>
        <ul className='navUl'>
          <li onClick={openPop} >Account <BiSolidUserCircle className='liIcon' /></li>
          <div onClick={openModal} className={otherPop ? 'userPop activePop' : 'userPop'}>
            <NavLink onClick={openPop} className='userBtn' to='/login'>Log in</NavLink>
            <NavLink onClick={openPop} to='/profile' className="userP">Profile</NavLink>
          </div>
          <li><NavLink onClick={openModal} to='/product'>Product <BsFillBagFill className='liIcon' /></NavLink></li>
          <li><NavLink onClick={openModal} to='/cart'>Cart <BsFillCartFill className='liIcon' /></NavLink></li>
        </ul>
      </div>

      <div className="burges" onClick={openModal}>
        <GiHamburgerMenu className='burg' />
      </div>
      <div onClick={openPop} className={otherPop ? 'remUserpop activeRem' : 'remUserpop'}></div>
    </nav>
  )
}

export default Navbar