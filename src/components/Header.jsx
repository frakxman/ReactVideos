import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Utils 
import gravatar from '../utils/gravatar';

// Styles 
import '../assets/styles/components/Header.scss';
import logo from '../assets/statics/react.gif';
import userIcon from '../assets/statics/user.png';

const Header = props => {
    const { user } = props;
    return (
        <header className="header">
            <Link to="/">
                <img className="header__img" src={ logo } alt="React Videos" />
            </Link>
            <div className="header__menu">
                <div className="header__menu--profile">
                    <img src={ Object.keys( user ).length > 0 ? gravatar( user.email ) : userIcon } alt={ user.email } />
                    <p>Profile</p>
                </div>
                <ul>
                    <li><a href="/">Acount</a></li>
                    <li><Link to="/login">Logout</Link></li>
                </ul>
            </div>
        </header>
    )
};

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

export default connect( mapStateToProps, null ) ( Header );