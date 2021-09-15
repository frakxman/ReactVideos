import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Actions 
import { loginRequest } from '../actions';

// Components 
import Header from '../components/Header';

// Styles
import '../assets/styles/components/Login.scss';
import google from '../assets/statics/google.jpg';
import twitter from '../assets/statics/twitter.png';

const Login = props => {
	const [ form, setValues ] = useState({
		email: '',
	});

	const handleInput = event => {
		setValues({
			...form,
			[ event.target.name ]: event.target.value
		});
	};

	const handleSubmit = event => {
		event.preventDefault();
		props.loginRequest( form );
		props.history.push('/');
	};

	return (
		<>
			<Header isLogin />
			<section className='login'>
				<section className='login__container'>
					<h2>Login</h2>
					<form className='login__container--form' onSubmit={ handleSubmit }>
						<input
							name='email'
							className='input'
							type='email'
							placeholder='Email'
							onChange={ handleInput }
						/>
						<input
							name='password'
							className='input'
							type='password'
							placeholder='Password'
							onChange={ handleInput }
						/>
						<button className='button'>
							Sign In
						</button>
						<div className='login__container--remember-me'>
							<label>
								<input type='checkbox' id='cbox1' value='first_checkbox' />
								Remember me
							</label>
							<a href='/'>Forgot my password</a>
						</div>
					</form>
					<section className='login__container--social-media'>
						<div>
							<img src={ google } /> Sign in with Google
						</div>
						<div>
							<img src={ twitter } /> Sign in with Twitter
						</div>
					</section>
					<p className='login__container--register'>
						You don't have any account 
						<Link to='/register'>
							Register
						</Link>
					</p>
				</section>
			</section>
		</>
	)
};

Login.propTypes = {
	loginRequest: PropTypes.func,
};

const mapDispatchToProps = {
	loginRequest
}

export default connect( null, mapDispatchToProps ) ( Login );