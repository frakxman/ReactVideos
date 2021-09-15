import React from 'react';

// Styles 
import '../assets/styles/components/NotFound.scss';
import logo from '../assets/statics/react.png';
import Header from '../components/Header';

const NotFound = () => (
    <>
        <Header isNotFound />
        <section className="error">
            <section className="error__container">
                <h2 className="error__container--title">
                    4 <sub><img src={ logo } alt="" /></sub>4
                </h2>
                <p>Page Not Found</p>
            </section>
        </section>
    </>
);

export default NotFound;