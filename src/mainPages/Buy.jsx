import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaMinus, FaTrashAlt } from 'react-icons/fa';
import '../sectionPages/chunkStyles/cart.css';
import imgCart from '../images/headsets/apple-airbuds.jpeg';

function Buy() {
    return (
        <div className="cart">
            <div className="cart-cont">
                <div className="cart-main">
                    <div className="cart-items">
                        <div className="cart-item">
                            <img src={imgCart} alt="" />
                            <div className="cart-item-info">
                                <h5>Headset</h5>
                                <p>1000$</p>
                            </div>
                        </div>
                        <div className="cart-del-add">
                            <div className="trash">
                                <span>Delete</span>
                                <FaTrashAlt className='del' />
                            </div>
                            <div className="add-minus">
                                <div className="sub">
                                    <FaMinus className='min' />
                                </div>
                                <div className="count-cart">
                                    <span>0</span>
                                </div>
                                <div className="plus">
                                    <FaPlus className='add' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart-summary">
                    <h4>Cart summary</h4>
                    <div className="cart-total">
                        <h5>SubTotal</h5>
                        <p>1000$</p>
                    </div>
                    <div className="check-out">
                        <button className="checkout">Checkout</button>
                        <span className='redirect'>Astro still has lot of tools to take you into another dimension, <Link to='/product' >continue shopping</Link></span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Buy;