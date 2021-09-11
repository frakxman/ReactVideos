import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Actions 
import { registerRequest } from '../actions';

// Styles 
import '../assets/styles/components/Register.scss';

const Register = props => { 
    const [ form, setValues ] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleInput = event => {
        setValues({
            ...form,
            [ event.target.name ]: event.target.value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.registerRequest( form );
        props.history.push('/login');
    }

    return (
        <section className="register">
            <section className="register__container">
            <h2>Register</h2>
            <form className="register__container--form" onSubmit={ handleSubmit }>
                <input
                    name="name"
                    className="input"
                    type="text"
                    placeholder="Name"
                    onChange={ handleInput }
                />
                <input
                    name="email"
                    className="input"
                    type="email"
                    placeholder="Email"
                    onChange={ handleInput }
                />
                <input
                    name="password"
                    className="input"
                    type="password"
                    placeholder="Password"
                    onChange={ handleInput }
                />
                <button className="button">Register me</button>
            </form>
            <Link to="/login">Login</Link>
            </section>
        </section>
    )
};

Register.propTypes = {
    registerRequest: PropTypes.func,
}

const mapDispatchToProps = {
    registerRequest,
}

export default connect( null, mapDispatchToProps ) ( Register );