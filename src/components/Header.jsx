import React from 'react';
import { Link } from 'react-router-dom';

// Styles 
import '../assets/styles/components/Header.scss';
import logo from '../assets/statics/react.gif';
import userIcon from '../assets/statics/user.png';

const Header = () => (
    <header className="header">
        <Link to="/">
            <img className="header__img" src={ logo } alt="React Videos" />
        </Link>
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src={ userIcon } alt="user icon" />
                <p>Profile</p>
            </div>
            <ul>
                <li><a href="/">Acount</a></li>
                <li><Link to="/login">Logout</Link></li>
            </ul>
        </div>
    </header>
);

export default Header;