import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

// Components
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Categories from '../components/Categories';
import Header from '../components/Header';
import Search from '../components/Search';

// Hooks 
// import useInitialState from '../hooks/useInitialState';

// Styles
import '../assets/styles/App.scss';

// const API = 'http://localhost:3000/initialState';

const Home = ({ myList, trends, originals, searchResult  }) => {

    // const initialState = useInitialState( API );

    return (
        <>
            <Header />
            <Search />

            { 
                Object.keys( searchResult ).length > 0 && 
                    <Categories title="Search results...">
                        <Carousel>
                            { searchResult.map( item =>
                                <CarouselItem 
                                    key = { item.id } 
                                    { ...item }
                                />
                            )}
                        </Carousel>
                    </Categories>                       
            }

            { myList.length > 0 && 
                <Categories title="My List">
                    <Carousel>
                    { myList.map( item => 
                        <CarouselItem 
                            key={ item.id }
                            { ...item }
                            isList
                        />                    
                    )}
                    </Carousel>
                </Categories>
            }

            <Categories title="Trends">
                <Carousel>
                    { trends.map( item => 
                        <CarouselItem  key={ item.id } { ...item } />                    
                    )}
                </Carousel>
            </Categories>

            <Categories title="Originals">
                <Carousel>
                { originals.map( item => 
                    <CarouselItem  key={ item.id } { ...item } />                    
                )}
                </Carousel>
            </Categories>

        </>
    )
};

const mapStateToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals,
        searchResult: state.searchResult,
    };
};

export default connect( mapStateToProps, null ) ( Home );