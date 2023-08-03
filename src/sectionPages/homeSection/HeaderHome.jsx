import React, { useEffect } from 'react';
import '../homeSection/homeStyle/header.css';
import imgAstro from '../../images/bgimg/astroworld2-bicubic.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'aos/dist/aos.js';



function HeaderHome() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out-cubic',
            once: true,
            disable: window.innerWidth > 576
        });
    }, []);
    
    const headCtxt = {
        head: 'Cosmic Harmonies, Stellar Rhythms, AstroSymphonies',
        para: 'Embark on an otherworldly auditory journey with our celestial sound equipment! Tune in to cosmic frequencies with our starlit headphones and space-age speakers for an out-of-this-world musical experience. Blast off now!',
        btn: 'Learn More',
        img: imgAstro
    }

    return (
        <header className="home-head">
            <div className="head" data-aos='fade-right'>
                <img src={headCtxt.img} alt="" className="bgHeadImg" />
                <div className="headcnt" data-aos='fade-up'>
                    <h1>Cosmic Harmonies, <br /> Stellar Rhythms, <br /> AstroSymphonies</h1>
                    <p>
                        {headCtxt.para}
                    </p>
                    <button data-aos='zoom-in' data-aos-delay='1000'>{headCtxt.btn}</button>
                </div>
            </div>
        </header>
    )
}

export default HeaderHome;