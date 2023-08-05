import React from 'react';
import { useSelector } from 'react-redux';
import '../sectionPages/chunkStyles/summary.css';

function Summary() {
    // getting the amount and cart length
    let totalAmt = useSelector((state) => state.product.totalPrice);
    let cartLength = useSelector((state) => state.product.items);

    console.log(cartLength.length)

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
                <button>Confirm Payment</button>
            </div>
        </div>
    </div>
  )
}

export default Summary