import React, { useEffect, useState } from 'react';

// Components
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Search from '../components/Search';

// Hooks 
import useInitialState from '../hooks/useInitialState';

// Styles
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';

const Home = () => {

    const initialState = useInitialState( API );

    return (
        <div className="App">
            <Header />
            <Search />
            { initialState.myList.length > 0 && 
                <Categories title="My List">
                    <Carousel>
                    { initialState.myList.map( item => 
                        <CarouselItem  key={ item.id } { ...item } />                    
                    )}
                    </Carousel>
                </Categories>
            }

            <Categories title="Trends">
                <Carousel>
                    { initialState.trends.map( item => 
                        <CarouselItem  key={ item.id } { ...item } />                    
                    )}
                </Carousel>
            </Categories>

            <Categories title="Originals">
                <Carousel>
                { initialState.originals.map( item => 
                    <CarouselItem  key={ item.id } { ...item } />                    
                )}
                </Carousel>
            </Categories>

            <Footer />
        </div>
    )
};

export default Home;