import React from 'react';
import { getVideoSearch } from '../actions';
import { connect } from 'react-redux';

// Styles
import '../assets/styles/components/Search.scss';

const Search = ( props ) => {
    const { getVideoSearch } = props;
    const handleInput = ( event ) => {
        getVideoSearch( event.target.value );       
    }
    return (
        <section className="main">
            <h2 className="main__title">What do you want to see today?</h2>
            <input type="text" className="input" placeholder="Search..." onKeyUp={ handleInput } />
        </section>
    )
};

const mapStateToProps = state => {
    return {
        searchResult: state.searchResult,
    };
};

const mapDispatchToProps = {
    getVideoSearch,
};


export default connect( mapStateToProps, mapDispatchToProps )( Search );