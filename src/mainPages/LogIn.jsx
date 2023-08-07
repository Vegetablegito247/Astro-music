import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../sectionPages/chunkStyles/logIn.css';

function LogIn() {
    // styles for the form
    const formStyle = {
        width: '500px',
        margin: '5rem auto',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '1rem',
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
        margin: '.7rem 0 0'
    };

    const liBtn = {
        width: '100%',
        height: '45px',
        borderRadius: '10px',
        margin: '2rem 0 1rem',
        border: 'none',
        color: 'var(--primary_color)',
        fontWeight: 'bold',
        backgroundColor: 'var(--intermediate_color)',
        transition: '.7s'
    };

    // getting the user login details and validating
    const [userEmailLog, setUserEmailLog] = useState('');
    const [userPwdLog, setUserPwdLog] = useState('');
    const [isSubmit, setIsSubmit] = useState(false)
    const [logErr, setLogErr] = useState({});

    const navigate = useNavigate()

    const logMe = JSON.parse(localStorage.getItem('astroUser'))
    // handling the user submission
    const handleLog = (e) => {
        e.preventDefault();
        setLogErr(validateLog(userEmailLog));
        setLogErr(validateLog(userPwdLog));
        setIsSubmit(true)
    }

    useEffect(() => {
        if (logMe !== null) {
            if (Object.keys(logErr).length === 0 && isSubmit) {
                navigate('/cart');
            }
        }
        else {
            let signMe = window.confirm('Seems you haven\'t created an account yet, Do you want to create one ?');
            if (signMe) {
                navigate('/signup');
            }
            else {
                navigate('/login');
            };
        };
    }, [isSubmit, logErr, logMe, navigate])

    // function for getting the error message
    const validateLog = (values) => {
        const errs = {};
        if (values.userEmailLog !== logMe.email) {
            errs.userEmailLog = 'Email cannot be find in ou database';
        }
        if (values.userPwdLog !== logMe.password) {
            errs.userPwdLog = 'Incorrect password';
        }
        else {
            return errs;
        }
        return errs;
    }

    return (
        <div className='logIn'>
            <form style={formStyle} className='log' action="" onSubmit={handleLog}>
                <div className="form-log">
                    <label htmlFor="">Email</label>
                    <input
                        style={inp}
                        type="email"
                        name='email'
                        onChange={(e) => setUserEmailLog(e.target.value)}
                    />
                    <span className='spanErr'>{logErr.userEmailLog}</span>
                </div>
                <div className="form-log">
                    <label htmlFor="" className='label'>Password</label>
                    <input
                        style={inp}
                        type="password"
                        name='password'
                        onChange={(e) => setUserPwdLog(e.target.value)}
                    />
                    <span className='spanErr'>{logErr.userPwdLog}</span>
                </div>
                <button style={liBtn} className="btnlogIn">Log in</button>
                <span className='linkSign'>Don't have an account yet ? click <Link to='/signup'>create account</Link></span>
            </form>
        </div>
    )
}

export default LogIn