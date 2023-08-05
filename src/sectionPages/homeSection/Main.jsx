import React, { useEffect } from 'react';
import '../homeSection/homeStyle/main.css'

import imgHeadset from '../../images/bgimg/verse-bicubic.jpg';
import imgVr from '../../images/bgimg/vrmulti-bicubic.jpg';
import imgspeaker from '../../images/bgimg/colourspeaker.jpeg';
import imgbad from '../../images/bgimg/badass.jpeg';
import cardImg1 from '../../images/cardImg/card1.jpeg';
import cardImg2 from '../../images/cardImg/card2.jpeg';
import cardImg3 from '../../images/cardImg/card3.jpeg';

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'aos/dist/aos.js';


function Main() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out-cubic',
      once: true,
      disable: window.innerWidth > 576
    });
  }, []);

  // storing all comments section to reduce lline of codes
  const cards = [
    {
      id: 1,
      imgCard: cardImg1,
      head: 'Johnatus Ebere',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 2,
      imgCard: cardImg2,
      head: 'Lookman Drinkwater',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 3,
      imgCard: cardImg3,
      head: 'Mike Slimbar',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

  return (
    <div className='main'>

      <div className="ads">
        <div className="advert">
          <div className="adImg" data-aos='fade-right'>
            <img src={imgHeadset} alt="headset" />
          </div>
          <div className="adBg"></div>
          <div className="adText" data-aos='fade-left'>
            <h3>Stellar Audio Odyssey</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur natus id, maxime molestias quo voluptate ut alias et incidunt? Reiciendis tempora autem perspiciatis quaerat hic veritatis quo laboriosam natus sequi voluptatum! Praesentium autem ut error sed voluptatem dolore at enim!
            </p>
            <button>check carts</button>
          </div>
        </div>

        <div className="advert">
          <div className="adBg adBg2"></div>
          <div className="adText adTxtC" data-aos='fade-right'>
            <h3>Let's take you to space</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident accusantium aliquid, dicta quos minus amet molestiae officia a aperiam delectus odio at ab labore voluptas distinctio officiis similique error quae id atque soluta corrupti. Laboriosam.
            </p>
            <button>check carts</button>
          </div>
          <div className="adImg" data-aos='fade-left'>
            <img src={imgVr} alt="headset" />
          </div>
        </div>
      </div>

      <div className="breakAd" data-aos='zoom-in'>
        <h3>Why buy your Musical Gadgets from Astro ?</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis suscipit odit, quod cum eaque facere architecto beatae minus sint eligendi iusto officia perspiciatis reiciendis. Assumenda, nam neque! Recusandae ea sapiente reiciendis mollitia natus blanditiis repudiandae ipsam at, explicabo velit saepe unde facilis dolorum dolorem ducimus voluptate voluptas molestiae enim omnis maiores praesentium fuga amet? Expedita minus placeat corporis earum ducimus.
        </p>
      </div>

      <div className="ads">
        <div className="advert">
          <div className="adImg" data-aos='fade-right'>
            <img src={imgspeaker} alt="headset" />
          </div>
          <div className="adBg adH1"></div>
          <div className="adText" data-aos='fade-left'>
            <h3>Turn your room to a Cosmic universe with our speakers</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cupiditate impedit natus. Est odio et rem, quia voluptas maxime quo ea recusandae adipisci ipsum quisquam quaerat exercitationem voluptatum debitis. Enim eveniet in maxime nemo voluptate recusandae deserunt earum repellat explicabo.
            </p>
            <button>check carts</button>
          </div>
        </div>

        <div className="advert">
          <div className="adBg adBg2 adH2"></div>
          <div className="adText adTxtC" data-aos='fade-right'>
            <h3>Enjoy the feel of the universe</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ipsa, incidunt quo possimus consectetur veniam provident sunt. Alias et nesciunt accusamus doloremque. Quas dolore ut quos corporis possimus, cupiditate aperiam earum quidem in, aliquid placeat voluptatem delectus accusantium hic officia qui nisi fugit vitae dolores tempore repudiandae.
            </p>
            <button>check carts</button>
          </div>
          <div className="adImg" data-aos='fade-left'>
            <img src={imgbad} alt="headset" />
          </div>
        </div>
      </div>

      {/* card  */}

      <div className="cards">
        {
          cards.map((card) => (
            <div className="card" data-aos='flip-right' key={card.id}>
              <div className="cardImg">
                <img style={{ objectFit: "cover" }} src={card.imgCard} alt="" />
              </div>
              <div className="cardText">
                <h3>{card.head}</h3>
                <p>{card.text}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Main