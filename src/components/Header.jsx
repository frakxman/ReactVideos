import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

// Actions 
import { logoutRequest } from '../actions';

// Utils 
import gravatar from '../utils/gravatar';

// Styles 
import '../assets/styles/components/Header.scss';
import logo from '../assets/statics/react.gif';
import userIcon from '../assets/statics/user.png';

const Header = props => {
    const { user, isLogin, isRegister, isNotFound } = props;
    const hasUser = Object.keys(user).length > 0;

    const handleLogout = () => {
        props.logoutRequest({});
    };

    const headerClass = classNames('header', {
        isLogin, 
        isRegister,
        isNotFound,
    });

    return (
        <header className={ headerClass }>
            <Link to="/">
                <img className="header__img" src={ logo } alt="React Videos" />
            </Link>
            <div className="header__menu">
                <div className="header__menu--profile">
                    { hasUser ? 
                        <img src={ gravatar( user.email ) } alt={ user.email } />
                        :
                        <img src={ userIcon } alt="user icon" />
                    }
                    <p>Profile</p>
                </div>
                <ul>
                    { hasUser ? <li> <a href="/">{ user.name }</a> </li> : null }
                    { hasUser ? 
                            <li> <a href="#" onClick={ handleLogout }>Logout</a> </li> 
                        :  
                            <li><Link to="/login">Login</Link></li>
                    }
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

const mapDispatchToProps = {
    logoutRequest,
}

export default connect( mapStateToProps, mapDispatchToProps ) ( Header );