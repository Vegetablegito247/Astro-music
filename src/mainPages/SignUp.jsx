 import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
    const initialValues = {firstName: '', lastName:'', phone:'', email:'', residenceState:'', address:'', password:'', confirmPassword:'',};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    // navigation tools
    const navigate = useNavigate();
    // onchange effect for getting the user values
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value});
    };
    // handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validateForm(formValues));
        setIsSubmit(true);
    };
    // useEffect for running the error message individually
    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            const userAstro = JSON.stringify(formValues);
            localStorage.setItem('astroUser', userAstro);
            navigate('/');
        }
    }, [formErrors, formValues, isSubmit, navigate])

    const validateForm = (values) => {
        const errors = {};
        // regEx for validating form
        const regEx =  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

        //validating username
        if(!values.firstName) {
            errors.firstName = 'First name is required';
        }
        else if (values.firstName.length < 3) {
            errors.firstName = 'Name must be at least 3 characters';
        }

        if(!values.lastName) {
            errors.lastName = 'Last name is required';
        }
        else if (values.lastName.length < 3) {
            errors.lastName = 'last name must be at least 3 characters';
        }
        // validating phone address
        if(!values.phone) {
            errors.phone = 'Telephone number is required';
        }
        // validating the email address
        if(!values.email) {
            errors.email = 'Email is required';
        }
        else if (!regEx.test(values.email)) {
            errors.email = 'This not a valid email format';
        }
        // validating the state
        if(!values.residenceState) {
            errors.residenceState = 'State of residence is required';
        }
        // validating the address
        if(!values.address) {
            errors.address = 'Home address is required';
        }
        else if (values.address.length < 5) {
            errors.firstName = 'Please type in your full address details';
        }
        // validating the password
        if(!values.password) {
            errors.password = 'Password is required';
        }
        else if( values.password.length < 4) {
            errors.password = 'Password must be at least 4 characters'
        }
        else if(values.password.length > 12) {
            errors.password = 'Password must cannot be greater than 12 characters'
        }

        if(!values.confirmPassword) {
            errors.confirmPassword = 'This field is required';
        }
        else if( values.confirmPassword !== values.password) {
            errors.confirmPassword = 'Password doesnt match';
        }

        return errors;
    }

    return (
        <div className='signUp'>
            <form className='sign' style={formStyle} action='' onSubmit={handleSubmit}>
                <div style={userInfo} className="userInfo">
                    <div className="form-control">
                        <label htmlFor="">First Name</label>
                        <input
                            style={inp}
                            type="text"
                            name='firstName'
                            value={formValues.firstName}
                            onChange={handleChange}
                        />
                        <span className='spanErr'>{ formErrors.firstName }</span>
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Last Name</label>
                        <input
                            style={inp}
                            type="text"
                            name='lastName'
                            value={formValues.lastName}
                            onChange={handleChange}
                        />
                        <span className='spanErr'>{ formErrors.lastName }</span>
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Contact Info</label>
                        <input
                            style={inp}
                            type="tel"
                            name='phone'
                            value={formValues.phone}
                            onChange={handleChange}
                        />
                        <span className='spanErr'>{ formErrors.phone }</span>
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Email Address</label>
                        <input
                            style={inp}
                            type="email"
                            name='email'
                            value={formValues.email}
                            onChange={handleChange}
                        />
                        <span className='spanErr'>{ formErrors.email }</span>
                    </div>
                    <div className="form-control">
                        <label htmlFor="" title='Current state you live in'>State of Residence</label>
                        <select style={inp} name='residenceState' value={formValues.residenceState} onChange={handleChange}>
                            {
                                resState.map((opt, index) => (
                                    <option key={index}>{opt}</option>
                                ))
                            }
                        </select>
                        <span className='spanErr'>{ formErrors.residenceState }</span>
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Home Address</label>
                        <input
                            style={inp}
                            type="text"
                            name='address'
                            value={formValues.address}
                            onChange={handleChange}
                        />
                        <span className='spanErr'>{ formErrors.address }</span>
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Set Password</label>
                        <input
                            style={inp}
                            type="password"
                            name='password'
                            value={formValues.password}
                            onChange={handleChange}
                        />
                        <span className='spanErr'>{ formErrors.password }</span>
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Confirm Password</label>
                        <input
                            style={inp}
                            type="password"
                            name='confirmPassword'
                            value={formValues.confirmPassword}
                            onChange={handleChange}
                        />
                        <span className='spanErr'>{ formErrors.confirmPassword }</span>
                    </div>
                </div>

                <div style={btn} className="signUpBtn">
                    <button style={spBtn} type='submit'>Sign Up</button>
                </div>
                <span className='linkLog'>Already have an account ? click here to <Link to='/login'>Log in</Link></span>
            </form>
        </div>
    )
}

export default SignUp