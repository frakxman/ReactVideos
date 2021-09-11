import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import '../assets/styles/components/Login.scss';
import google from '../assets/statics/google.jpg';
import twitter from '../assets/statics/twitter.png';

const Login = () => (
    <section className='login'>
		<section className='login__container'>
			<h2>Login</h2>
			<form className='login__container--form'>
				<input className='input' type='email' placeholder='Email' />
				<input className='input' type='password' placeholder='Password' />
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
);

export default Login;