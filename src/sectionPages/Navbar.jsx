import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../sectionPages/stylesSection/nav.css';

import { BiSolidUserCircle } from 'react-icons/bi';
import { BsFillRocketTakeoffFill, BsFillBagFill, BsFillCartFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

function Navbar() {
  // using useState to set up my pop modal for media resoponsiveness
  const [openSidebar, setOpenSidebar] = useState(false);
  const [otherPop, setOtherPop] = useState(false);

  //navigation tool
  const navigate = useNavigate()

  // my modal functionality
  const openModal = () => {
    setOpenSidebar(!openSidebar);
    if (otherPop) {
      setOtherPop(false);
    };
  };
  const openPop = () => {
    setOtherPop(!otherPop);
  };

  // getting the user email to verify if they are logged in
  const email = JSON.parse(localStorage.getItem('astroUser'));

  // handling request verifying the user is logge in before completing order
  const handleCart = () => {
    if (email === null) {
      const signMeUp = window.confirm('Sorry it seems like you aren\'t logged in yet . Do you want to log in to complete your order ?');
      if (signMeUp === true) {
        navigate('/login');
        setOpenSidebar(!openSidebar);
      };
    }
    else {
      navigate('/cart');
      setOpenSidebar(!openSidebar);
    }
  }

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
          {
            email !== null ? (
              <li><NavLink to='/profile' onClick={openModal}>{`Hi, ${email.firstName}`} <BiSolidUserCircle className='liIcon' /></NavLink></li>
            ) : (
              <li onClick={openPop} >Account <BiSolidUserCircle className='liIcon' /></li>
            )
          }
          <div onClick={openModal} className={otherPop ? 'userPop activePop' : 'userPop'}>
            <NavLink onClick={openPop} className='userBtn' to='/login'>Log in</NavLink>
            <NavLink onClick={openPop} to='/profile' className="userP">Profile</NavLink>
          </div>
          <li><NavLink onClick={openModal} to='/product'>Product <BsFillBagFill className='liIcon' /></NavLink></li>
          <li onClick={handleCart}>Cart <BsFillCartFill className='liIcon' /></li>
        </ul>
      </div>

      <div className="burges" onClick={openModal}>
        <GiHamburgerMenu className='burg' />
      </div>
      <div onClick={openPop} className={otherPop ? 'remUserpop activeRem' : 'remUserpop'}></div>
    </nav>
  );
};

export default Navbar;