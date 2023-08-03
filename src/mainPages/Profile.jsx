import React from 'react';
import '../sectionPages/chunkStyles/profile.css';
import { Link } from 'react-router-dom';

function Profile() {
    return (
        <div className='profile'>
            <div className="profileMenu">
                <div className="profile-head">
                    <h3>Account Overview</h3>
                    <Link to='/edit'>Edit</Link>
                </div>

                <div className="profile-info">
                    <div className="profile-details">
                        <h4>Account Details</h4>
                        <div className="profile-det">
                            <span className="user-name">Oladipupo Ajadi</span>
                            <span className="user-email">akalmin247@gmail.com</span>
                        </div>
                    </div>
                    <div className="profile-shipping">
                        <h4>Your default shipping address</h4>
                        <div className="profile-ship">
                            <span className="user-strt">52, Tokunboh street</span>
                            <span className="user-region">Lagos Island, Lagos</span>
                            <span className="user-no">+2347038560337</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile