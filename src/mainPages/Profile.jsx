import React from 'react';
import '../sectionPages/chunkStyles/profile.css';
import { Link } from 'react-router-dom';

function Profile() {
    const userDetails = JSON.parse(localStorage.getItem('astroUser'));
    return (
        <div className='profile'>
            {
                userDetails !== null ? (
                    <div className="profileMenu">
                    <div className="profile-head">
                        <h3>Account Overview</h3>
                        <Link to='/edit'>Edit</Link>
                    </div>
    
                    <div className="profile-info">
                        <div className="profile-details">
                            <h4>Account Details</h4>
                            <div className="profile-det">
                                <span className="user-name">{`${userDetails.lastName} ${userDetails.firstName}`}</span>
                                <span className="user-email">{userDetails.email}</span>
                            </div>
                        </div>
                        <div className="profile-shipping">
                            <h4>Your default shipping address</h4>
                            <div className="profile-ship">
                                <span className="user-strt">{userDetails.address}</span>
                                <span className="user-region">{userDetails.residenceState}</span>
                                <span className="user-no">{userDetails.phone}</span>
                            </div>
                        </div>
                    </div>
                </div>
                ) : (
                    <div className="noAcct">
                        <p>You don't have an account yet, <Link to='/signup' style={{marginLeft: '10px'}}>signup now</Link></p>
                    </div>
                )
            }
        </div>
    )
}

export default Profile