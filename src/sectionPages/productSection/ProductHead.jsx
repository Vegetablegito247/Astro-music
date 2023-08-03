import React, { useState } from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import '../productSection/productStyle/productHead.css';

import imgSlide1 from '../../images/mps/jbl-charge3-waterproof-speaker.jpeg';
import imgSlide2 from '../../images/headsets/virtual-reality-headsets.jpeg';
import imgSlide3 from '../../images/headsets/ps4-gaming-headset-with-usb.jpeg';

function ProductHead() {
    const slideImg = [
        {
            img: imgSlide1,
            id: 1
        },
        {
            img: imgSlide2,
            id: 2
        },
        {
            img: imgSlide3,
            id: 3
        }
    ];

    const [sliderInd, setSliderInd] = useState(0);

    const nextSlide = () => {
        setSliderInd(sliderInd === slideImg.length - 1 ? 0 : sliderInd + 1);
    };

    const prevSlide = () => {
        setSliderInd(sliderInd === 0 ? slideImg.length - 1 : sliderInd - 1);
    };

    return (
        <div className='proHead'>
            <div className="proSlider">
                {
                    slideImg.map((slide, index) => (
                        <div key={slide.id} className={sliderInd === index ? 'proSlide' : 'proSlide slideAway'}>
                            <img src={slide.img} alt="" />
                        </div>
                    ))
                }
                <div onClick={prevSlide} className="btn btn-left">
                    <AiFillCaretLeft className='slideIcon'/>
                </div>
                <div onClick={nextSlide} className="btn btn-right">
                    <AiFillCaretRight className='slideIcon'/>
                </div>
            </div>
        </div>
    )
}

export default ProductHead;