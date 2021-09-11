import React, { useEffect, useState } from 'react';

// Components
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Search from '../components/Search';

// Styles
import '../assets/styles/App.scss';

const App = () => {
    const [ videos, setVideos ] = useState({ myList: [], trends: [], originals: []});

    useEffect(() => {
        fetch( 'http://localhost:3000/initialState' )
            .then( response => response.json())
            .then( data => setVideos( data ));
    }, []);

    return (
        <div className="App">
            <Header />
            <Search />
            { videos.myList.length > 0 && 
                <Categories title="My List">
                    <Carousel>
                    { videos.myList.map( item => 
                        <CarouselItem  key={ item.id } { ...item } />                    
                    )}
                    </Carousel>
                </Categories>
            }

            <Categories title="Trends">
                <Carousel>
                    { videos.trends.map( item => 
                        <CarouselItem  key={ item.id } { ...item } />                    
                    )}
                </Carousel>
            </Categories>

            <Categories title="Originals">
                <Carousel>
                { videos.originals.map( item => 
                    <CarouselItem  key={ item.id } { ...item } />                    
                )}
                </Carousel>
            </Categories>

            <Footer />
        </div>
    )
};

export default App;