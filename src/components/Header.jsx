import React from 'react';

// Styles 
import '../assets/styles/components/Header.scss';
import logo from '../assets/statics/react.gif';
import userIcon from '../assets/statics/user.png';

const Header = () => (
    <header className="header">
        <img className="header__img" src={ logo } alt="React Videos" />
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src={ userIcon } alt="user icon" />
                <p>Profile</p>
            </div>
            <ul>
                <li><a href="/">Acount</a></li>
                <li><a href="/">Logout</a></li>
            </ul>
        </div>
    </header>
);

export default Header;