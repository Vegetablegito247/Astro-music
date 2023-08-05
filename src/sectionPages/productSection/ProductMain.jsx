import React, { useEffect, useState } from 'react';
import { BsFillBagFill, BsFillCartFill } from 'react-icons/bs';
import '../productSection/productStyle/productMain.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'aos/dist/aos.js';

import CartIcon from '../../mainPages/CartIcon';

import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../../redux/slices/productslice';
import { store } from '../../redux/store';

function ProductMain(props) {

    // navigation variable
    const dispatch = useDispatch();

    // getting the item api from the Product page
    const products = props.products;

    let count = useSelector((state) => state.product.totalItem);
    const [ids, setIds] = useState(store.getState()?.product?.items?.map((item) => item.id) || []);

    // subscribe to the store
    store.subscribe(() => {
        setIds(store.getState()?.product?.items?.map((item) => item.id));
    });

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
                            <div className="prd-btn prd-buy">
                                <BsFillBagFill />
                                <p>Buy now</p>
                            </div>
                            <div className="prd-btn prd-add" onClick={() => {
                                if (!ids.includes(prd.id)) {
                                    dispatch(addProduct(prd))
                                    alert(`${prd.title} has been added to cart`)
                                } else {
                                    // item already added to cart
                                    alert('Item already added to cart')
                                }
                            }}>
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