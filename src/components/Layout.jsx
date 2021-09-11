import React from 'react';

// Components 
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
    <div className="App">
        <Header />
        { children }
        <Footer />
    </div>
);

export default Layout;