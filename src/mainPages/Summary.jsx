import React from 'react';
import { useSelector } from 'react-redux';
import { usePaystackPayment } from 'react-paystack';
import '../sectionPages/chunkStyles/summary.css';
import { useNavigate } from 'react-router-dom';

function Summary() {
    // navigation
    const navigate = useNavigate()
    // getting the amount and cart length
    let totalAmt = useSelector((state) => state.product.totalPrice);
    let cartLength = useSelector((state) => state.product.items);

    // payment method
    const config = {
        reference: (new Date()).getTime().toString(),
        email: 'akalmin247@gmail.com',
        amount: totalAmt * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        publicKey: 'pk_test_8b50893a5891d0e9440ac570f6c142448d2161e3',
    };

    const onSuccess = (reference) => {
        console.log('Payment has been made successfully');
        navigate('/product');

    };

    const onClose = (reference) => {
        alert('Payment has been closed successfully');
    };

    const initializePayment = usePaystackPayment(config);

    const payNow = () => {
        let opinion = window.confirm(`Total amount of item is ${cartLength.length} and sum up to ${totalAmt}`);

        if (opinion === true) {
            initializePayment(onSuccess, onClose);
        }
        else {
            alert('Payment has been cancelled');
        };
    };

    console.log(cartLength.length);

  return (
    <div className='summary-overview'>
        <div className="overview">
            <h1>Summary</h1>
            <div className="over-details">
                <span className="first-last">Almin Ajadi</span>
                <span className="over-address">52, Tokunboh street, Lagos Island, Lagos</span>
            </div>

            <div className="confirm">
                <h3>Items</h3>
                <div className="confirm-items">
                    <span>Items: ( { cartLength.length } )</span>
                    <span className="confirm-total">N{ totalAmt }</span>
                </div>
                <button onClick={payNow}>Confirm Payment</button>
            </div>
        </div>
    </div>
  )
}

export default Summary;