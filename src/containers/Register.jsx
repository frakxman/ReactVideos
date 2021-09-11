import React from 'react';

// Styles 
import '../assets/styles/components/Register.scss';

const Register = () => (
    <section className="register">
        <section className="register__container">
        <h2>Register</h2>
        <form className="register__container--form">
            <input className="input" type="text" placeholder="Name" />
            <input className="input" type="email" placeholder="Email" />
            <input className="input" type="password" placeholder="Password" />
            <button className="button">Register me</button>
        </form>
        <a href="">Login</a>
        </section>
    </section>
);

export default Register;