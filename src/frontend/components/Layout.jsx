import React from 'react';

// Components 
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
    <div className="App">
        { children }
        <Footer />
    </div>
);

export default Layout;