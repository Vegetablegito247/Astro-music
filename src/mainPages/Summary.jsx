import React from 'react';
import '../sectionPages/chunkStyles/summary.css';

function Summary() {
    const price = localStorage.getItem('totalValue');
    const summary = JSON.parse(price);
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
                    <span>Items: 10</span>
                    <span className="confirm-total">N{ summary }</span>
                </div>
                <button>Confirm Payment</button>
            </div>
        </div>
    </div>
  )
}

export default Summary