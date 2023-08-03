import React from 'react';
import './stylesSection/footer.css'
import { BsFacebook, BsTwitter, BsInstagram, BsWhatsapp, BsFillRocketTakeoffFill } from 'react-icons/bs';

function Footer() {
  return (
    <div className='footer'>
        <div className="footLogo">
            <h3>ASTRO</h3>
            <BsFillRocketTakeoffFill className='footIcon' />
        </div>
        <div className="footList">
            <ul className='footUl'>
                <h4>Useful Links</h4>

                <li>About us</li>
                <li>Our HeadQuarter</li>
                <li>Online Reservations</li>
                <li>Branches</li>
            </ul>
            <ul className='footUl'>
                <h4>Customer care</h4>

                <li>+234-703-856-0337</li>
                <li>akalmin247@gmail.com</li>
                <li>12, Agbamalu street, Washington, London.</li>
                <li>Mon - Fri 24hrs/7days</li>
            </ul>
            <ul className='footUl ulI'>
                <h4>Follow us on our platforms</h4>

                <li><BsFacebook className='ulIcon' /></li>
                <li><BsTwitter className='ulIcon' /></li>
                <li><BsInstagram className='ulIcon' /></li>
                <li><BsWhatsapp className='ulIcon' /></li>
            </ul>
            <form action="" className='footForm'>
                <h4>Send a Message</h4>
                <div className="formcontrol">
                    <label htmlFor="">Your Email:</label>
                    <input type="email" name="" id="" />
                </div>
                <div className="formcontrol">
                    <label htmlFor="">Your Message:</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Footer