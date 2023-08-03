import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../sectionPages/chunkStyles/signUp.css';

function SignUp() {
    // options for the state
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
        backgroundColor: 'var(--intermediate_color)',
        transition: '.7s'
    };

    // getting the input value using state
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [residenceState, setResidenceState] = useState('');

    return (
        <div className='signUp'>
            <form className='sign' style={formStyle} action="">
                <div style={userInfo} className="userInfo">
                    <div className="form-control">
                        <label htmlFor="">First Name</label>
                        <input
                            style={inp}
                            type="text"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Last Name</label>
                        <input
                            style={inp}
                            type="text"
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Contact Info</label>
                        <input
                            style={inp}
                            type="tel"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Email Address</label>
                        <input
                            style={inp}
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="" title='Current state you live in'>State of Residence</label>
                        <select style={inp} id="">
                            {
                                resState.map((opt, index) => (
                                    <option key={index} onChange={(e) => setResidenceState(e.target.value)}>{opt}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Home Address</label>
                        <input
                            style={inp}
                            type="text"
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Set Password</label>
                        <input
                            style={inp}
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Confirm Password</label>
                        <input
                            style={inp}
                            type="password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                </div>

                <div style={btn} className="signUpBtn">
                    <button style={spBtn}>Sign Up</button>
                </div>
                <span className='linkLog'>Already have an account ? click here to <Link to='/login'>Log in</Link></span>
            </form>
        </div>
    )
}

export default SignUp