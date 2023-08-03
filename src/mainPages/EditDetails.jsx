import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../sectionPages/chunkStyles/signUp.css';

function EditDetails() {
    const resState = [
        'Abia', 'Gombe', 'Niger', 'Akwa Ibom', 'Cross River', 'Jigawa', 'Bauchi', 'Kebbi', 'Katsina', 'Kano', 'Jigawa', 'Yobe', 'Zamfara', 'Taraba', 'Sokoto', 'River', 'Plateau', 'Oyo', 'Osun', 'Ondo', 'Ogun', 'Ekiti', 'Edo', 'Ebonyi', 'Delta', 'Enugu', 'Bayelsa', 'Anambra', 'Lagos', 'Kwara', 'Kogi', 'Kaduna', 'Benue', 'Borno', 'Adamawa', 'Abuja'
    ];

    // styling the form

    const formStyle = {
        width: '800px',
        margin: '5rem auto',
        borderRadius: '10px',
        padding: '20px',
        color: 'var(--primary_color)',
        backgroundColor: 'var(--secondary_color)'
    }

    const userInfo = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, auto)',
        columnGap: '20px',
        rowGap: '2rem'
    };

    const inp = {
        display: 'block',
        height: '40px',
        width: '100%',
        outline: 'none',
        border: 'none',
        borderRadius: '10px',
        padding: '5px',
        marginTop: '.7rem'
    };

    const btn = {
        width: '300px',
        margin: '3rem auto 1rem'
    };

    const spBtn = {
        width: '100%',
        height: '45px',
        borderRadius: '10px',
        border: 'none',
        color: 'var(--primary_color)',
        fontWeight: 'bold',
        backgroundColor: 'var(--intermediate_color)'
    };

    return (
        <div className='signUp'>
            <form className='sign' style={formStyle} action="">
                <div style={userInfo} className="userInfo">
                    <div className="form-control">
                        <label htmlFor="">First Name</label>
                        <input style={inp} type="text" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Last Name</label>
                        <input style={inp} type="text" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Contact Info</label>
                        <input style={inp} type="tel" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Email Address</label>
                        <input style={inp} type="email" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="" title='Current state you live in'>State of Residence</label>
                        <select style={inp} id="">
                            {
                                resState.map((opt, index) => (
                                    <option key={index} value={opt}>{opt}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Set Password</label>
                        <input style={inp} type="password" name="" id="" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Confirm Password</label>
                        <input style={inp} type="password" name="" id="" />
                    </div>
                </div>

                <div style={btn} className="signUpBtn">
                    <button style={spBtn}>Save</button>
                </div>
            </form>
        </div>
    )
}

export default EditDetails