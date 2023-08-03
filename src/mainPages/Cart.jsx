import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaPlus, FaMinus, FaTrashAlt } from 'react-icons/fa';
import '../sectionPages/chunkStyles/cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { delProduct } from '../redux/slices/productslice';

function Cart() {
    // getting the products the user picked     


    const dispatch = useDispatch()
    let amt = useSelector((state) => state.product.totalPrice)
    let cartData = useSelector((state) => state.product.items)

    console.log(cartData);



    return (
        <div className="cart">
            <div className="cart-cont">
                <div className="cart-main">
                    <h3 className='cart-head'>Cart</h3>
                    {
                        cartData.length === 0 ? <p className='empty-cart'>Your cart is empty</p> : (
                            cartData.map((item) => (
                                <div className="cart-items" key={ item.id }>
                                    <div className="cart-item">
                                        <img src={ item.prdImg } alt="" />
                                        <div className="cart-item-info">
                                            <h5>{ item.title }</h5>
                                            <p>N{ item.prdPrice }</p>
                                        </div>
                                    </div>
                                    <div className="cart-del-add">
                                        <div className="trash" onClick={() => dispatch(delProduct(item))}>
                                            <span>Delete</span>
                                            <FaTrashAlt className='del' />
                                        </div>
                                        <div className="add-minus" >
                                            <div className="sub">
                                                <FaMinus className='min' />
                                            </div>
                                            <div className="count-cart">
                                                <span>{item.qty}</span>
                                            </div>
                                            <div className="plus">
                                                <FaPlus className='add' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )
                    }
                </div>
                <div className="cart-summary">
                    <h4>Cart summary</h4>
                    <div className="cart-total">
                        <h5>SubTotal</h5>
                        <p>{amt}</p>
                    </div>
                    <div className="check-out">
                        <button className="checkout" >Checkout</button>
                        <span className='redirect'>Astro still has lot of tools to take you into another dimension, <Link to='/product' >continue shopping</Link></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;