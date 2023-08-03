import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../sectionPages/chunkStyles/logIn.css';

function LogIn() {
    const formStyle = {
        width: '500px',
        margin: '5rem auto',
        borderRadius: '10px',
        padding: '20px',
        color: 'var(--primary_color)',
        backgroundColor: 'var(--secondary_color)'
    }

    const inp = {
        display: 'block',
        height: '40px',
        width: '100%',
        outline: 'none',
        border: 'none',
        borderRadius: '10px',
        padding: '5px',
        margin: '.7rem 0 2rem'
    };

    const liBtn = {
        width: '100%',
        height: '45px',
        borderRadius: '10px',
        marginBottom: '1rem',
        border: 'none',
        color: 'var(--primary_color)',
        fontWeight: 'bold',
        backgroundColor: 'var(--intermediate_color)',
        transition: '.7s'
    };

    
        const [userEmailLog, setUserEmailLog] = useState('');
        const [userPwdLog, setUserPwdLog] = useState('');
    
  return (
    <div className='logIn'>
        <form style={formStyle} className='log' action="">
            <div className="form-log">
                <label htmlFor="">Email</label>
                <input 
                style={inp} 
                type="email"
                onChange={(e) => setUserEmailLog(e.target.value)}
                />
            </div>
            <div className="form-log">
                <label htmlFor="">Password</label>
                <input 
                style={inp} 
                type="password"
                onChange={(e) => setUserPwdLog(e.target.value)}
                 />
            </div>
            <button style={liBtn} className="btnlogIn">Log in</button>
            <span className='linkSign'>Don't have an account yet ? click <Link to='/signup'>create account</Link></span>
        </form>
    </div>
  )
}

export default LogIn