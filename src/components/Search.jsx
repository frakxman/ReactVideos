import React from 'react';

// Styles
import '../assets/styles/components/Search.scss';

const Search = () => (
    <section className="main">
        <h2 className="main__title">What do you want to see today?</h2>
        <input type="text" className="input" placeholder="Search..." />
    </section>
);

export default Search;