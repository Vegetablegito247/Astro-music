import React, { useState } from 'react';


import headset1 from '../images/headsets/2nd-generation-airpods.jpeg';
import headset2 from '../images/headsets/alienware-headset.jpeg';
import headset3 from '../images/headsets/apple-airbuds.jpeg';
import headset4 from '../images/headsets/cute-flashing-led.jpeg';
import headset5 from '../images/headsets/generic-ps4-gaming-headset.jpeg';
import headset6 from '../images/headsets/hyperX-gaming-headset.jpeg';
import headset7 from '../images/headsets/jbl-noise-cancellation.jpeg';
import headset8 from '../images/headsets/oraimo-earbuds.jpeg';
import headset9 from '../images/headsets/p47-headset.jpeg';
import headset10 from '../images/headsets/ps4-camour-gaming-headset.jpeg';
import headset11 from '../images/headsets/ps4-gaming-headset-with-usb.jpeg';
import headset12 from '../images/headsets/samsung-buds-pro2.jpeg';
import headset13 from '../images/headsets/samsung-galaxy-buds.jpeg';
import headset14 from '../images/headsets/Turtle-beach-recon-gaming-headset.jpeg';
import headset15 from '../images/headsets/virtual-reality-headsets.jpeg';
import headset16 from '../images/mps/bluetooth-and-sd-mp.jpeg';
import headset17 from '../images/mps/gilary-metal-digital-mp.jpeg';
import headset18 from '../images/mps/jbl-charge3-waterproof-speaker.jpeg';
import headset19 from '../images/mps/mini-mp-player.jpeg';
import headset20 from '../images/mps/mivi-play-speaker.jpeg';
import headset21 from '../images/mps/portable-jbl-speaker.jpeg';
import headset22 from '../images/mps/sacramento-mp4.jpeg';
import headset23 from '../images/mps/small-size-sony-speaker.jpeg';
import headset24 from '../images/mps/sony-ash-color-clothed.jpeg';
import headset25 from '../images/mps/sony-bluetooth.jpeg';
import headset26 from '../images/mps/touchScreen-mp.jpeg';
import headset27 from '../images/mps/tribit-speaker.jpeg';
import headset28 from '../images/mps/usb-stick.jpeg';
import headset29 from '../images/mps/workman-mp.jpeg';
import headset30 from '../images/mps/zealot-p8-speaker.jpeg';


import ProductHead from '../sectionPages/productSection/ProductHead';
import ProductMain from '../sectionPages/productSection/ProductMain';

function Product() {
    const [products, setProducts] = useState([
        {
            id: 1,
            prdImg: headset1,
            title: 'The 2nd generation airpods',
            qty:1,
            prdPrice: 12000,
        },

        {
            id: 2,
            prdImg: headset2,
            title: 'Alien ware headset',
            qty:1,
            prdPrice: 21500
        },

        {
            id: 3,
            prdImg: headset3,
            title: 'Applw airbuds, waterProof and noise cancellation',
            qty:1,
            prdPrice: 6500
        },

        {
            id: 4,
            prdImg: headset4,
            title: 'Cute flashing led headset with cat ears',
            qty:1,
            prdPrice: 10000
        },

        {
            id: 5,
            prdImg: headset5,
            title: 'Generic Ps4 gaming headset with installed airbags',
            qty:1,
            prdPrice: 32050
        },

        {
            id: 6,
            prdImg: headset6,
            title: 'Hyper X gaming headset',
            qty:1,
            prdPrice: 23000
        },

        {
            id: 7,
            prdImg: headset7,
            title: 'Noise cancellation red colored JBL headset',
            qty:1,
            prdPrice: 15000
        },

        {
            id: 8,
            prdImg: headset8,
            title: 'Oraimo freepod 3 earbuds',
            qty:1,
            prdPrice: 22000
        },

        {
            id: 9,
            prdImg: headset9,
            title: 'P47 headset, water resistance, noise cancellation and strong bass',
            qty:1,
            prdPrice: 7300
        },

        {
            id: 10,
            prdImg: headset10,
            title: 'Camour cased Play station 4 gaming Headset',
            qty:1,
            prdPrice: 12000
        },

        {
            id: 11,
            prdImg: headset11,
            title: 'Play station 4 gaming headset with Free hard drive',
            qty:1,
            prdPrice: 23500
        },

        {
            id: 12,
            prdImg: headset12,
            title: 'Samsung galaxy pro2 earbuds',
            qty:1,
            prdPrice: 30000
        },

        {
            id: 13,
            prdImg: headset13,
            title: 'Samsung earbuds',
            qty:1,
            prdPrice: 15000
        },

        {
            id: 14,
            prdImg: headset14,
            title: 'Turtle beach recon gaming Headset with mic piece',
            qty:1,
            prdPrice: 12500
        },

        {
            id: 15,
            prdImg: headset15,
            title: 'Virtual reality headset with controllers for gamers',
            qty:1,
            prdPrice: 40000
        },
        {
            id: 16,
            prdImg: headset16,
            title: '1970 mp3 bluetooth with sd card space and inbuilt earphones',
            qty:1,
            prdPrice: 10000
        },
        {
            id: 17,
            prdImg: headset17,
            title: 'Gilary digital metal mp3',
            qty:1,
            prdPrice: 3500
        },
        {
            id: 18,
            prdImg: headset18,
            title: 'Charge3 waterproof and Astrosound JBL speaker',
            qty:1,
            prdPrice: 25000
        },
        {
            id: 19,
            prdImg: headset19,
            title: 'Mini mp3 player',
            qty:1,
            prdPrice: 1500
        },
        {
            id: 20,
            prdImg: headset20,
            title: 'Mivi play speaker',
            qty:1,
            prdPrice: 5000
        },
        {
            id: 21,
            prdImg: headset21,
            title: 'Portable side pocket JBL speaker',
            qty:1,
            prdPrice: 12300
        },
        {
            id: 22,
            prdImg: headset22,
            title: 'Sacramento HI-FI walker mp4 player',
            qty:1,
            prdPrice: 32000
        },
        {
            id: 23,
            prdImg: headset23,
            title: 'Comfortable small size sony speaker',
            qty:1,
            prdPrice: 5000
        },
        {
            id: 24,
            prdImg: headset24,
            title: 'Ash color clothed sony speaker with strong bass',
            qty:1,
            prdPrice: 15000
        },
        {
            id: 25,
            prdImg: headset25,
            title: 'Sony Bluetooth',
            qty:1,
            prdPrice: 10000
        },
        {
            id: 26,
            prdImg: headset26,
            title: 'Version 5.0 touchscreen mp4 player with inbuilt earphones',
            qty:1,
            prdPrice: 70000
        },
        {
            id: 27,
            prdImg: headset27,
            title: 'Strong bass, waterproof, fallproof tribit speaker',
            qty:1,
            prdPrice: 13000
        },
        {
            id: 28,
            prdImg: headset28,
            title: 'multipurpose mp3 player',
            qty:1,
            prdPrice: 8000
        },
        {
            id: 29,
            prdImg: headset29,
            title: 'Workman mp3 player, suitable for factory workers',
            qty:1,
            prdPrice: 4000
        },
        {
            id: 30,
            prdImg: headset30,
            title: 'Zealot speaker',
            qty:1,
            prdPrice: 15000
        }
    ])

  return (
    <div>
        <ProductHead />
        <ProductMain products={products}/>
    </div>
  )
}

export default Product