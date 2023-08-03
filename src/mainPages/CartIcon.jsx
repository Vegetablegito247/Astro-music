import React from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

function CartIcon(props) {
    const count = props.count;

    const fixed = {
        position: 'fixed',
        right: '10px',
        bottom: '10px',
        width: '50px',
        height: '50px',
        transition: '1s'
    };

    const relative = {
        position:'relative',
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'var(--intermediate_color)'
    };

    const icon = {
        fontSize: '25px',
        color: 'var(--secondary_color)'
    };

    const countIcon = {
        position: 'absolute',
        top: '6px',
        right: '6px',
        width: '18px',
        height: '18px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '12px',
        borderRadius: '50%',
        backgroundColor: 'var(--primary_color)',
        color: 'var(--secondary_color)'
    };

    const navigate = useNavigate();

    const directCart = () => {
        if (count === 0 ) {
            alert('Cart is empty at the moment. Please select a new Cart first and try again.');
            return false;
        }
        else {
            navigate('/cart');
            return true;
        };
    }

    return (
        <div className='fixedCart' style={fixed}>
            <div className="relativecart" style={relative} onClick={directCart}>
                <BsFillCartFill className='cartIcon' style={icon}/>
                <span style={countIcon}>{count}</span>
            </div>
        </div>
    )
}

export default CartIcon;