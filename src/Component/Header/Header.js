import React from 'react';
import './Header.css'
import logo from '../../image/fungym-logo.jpg'

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <img src={logo} alt="" />
                <h2>Fun With Gym</h2>
            </nav>
        </div>
    );
};

export default Header;