import React, { useEffect, useState } from 'react';
import { BsFillBagFill, BsFillCartFill } from 'react-icons/bs';
import '../productSection/productStyle/productMain.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'aos/dist/aos.js';

import CartIcon from '../../mainPages/CartIcon';
import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../../redux/slices/productslice';
// import { useNavigate } from 'react-router-dom';

function ProductMain(props) {

    // navigation variable
     const navigate = useNavigate();
     const dispatch = useDispatch();

    // getting the item api from the Product page
    const products = props.products;

    let data = useSelector((state) =>  state.product.items)
    let count = useSelector((state) => state.product.totalItem)
    let amt = useSelector((state) => state.product.totalPrice)

    // const [cartItems, setCartItems] = useState([])
    // const [count, setCount] = useState(0)


    // the event listener for adding to cart
    // const addToCart = (product) => {
    //     setCartItems([...cartItems, product]);
    //     setCount(count + 1);
    //     alert(`${product.title} has been added to cart`)
    //     localStorage.setItem('cartItems', JSON.stringify(cartItems));
    // }

    // the event listener to lead the user to buy page

    // animation effect function from AOS
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out-cubic',
            once: true,
            disable: window.innerWidth > 576
        });
    }, []);


    return (
        <div className='prodMain'>
            <div className="products">
                {/* mapping through the products from our item api */}
                {products.map((prd) => (
                    <div className="prdItem" data-aos='flip-left' key={prd.id}>
                        <div className="img">
                            <img src={prd.prdImg} alt="" />
                        </div>
                        <h3>{prd.title}</h3>
                        <p className='price'>{prd.prdPrice}</p>
                        <div className="prd-check">
                            <div className="prd-buy">
                                <BsFillBagFill />
                                <p>Buy now</p>
                            </div>
                            <div className="prd-add" onClick={() => dispatch(addProduct(prd))}>
                                <BsFillCartFill />
                                <p>Add to cart</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* linking the cartIcon to get the count value */}
            <CartIcon count={count} />
        </div>
    )
}

export default ProductMain