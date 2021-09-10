import React from 'react';

// Styles 
import '../assets/styles/components/CarouselItem.scss';
import play from '../assets/statics/play.png';
import plus from '../assets/statics/plus.png';

const CarouselItem = () => (
    <div className="carousel-item">
        <img className="carousel-item__img" src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""  />
        <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details--img" src={ play } alt="Play Icon" />
                <img className="carousel-item__details--img" src={ plus } alt="Plus Icon" />
            </div>
            <p className="carousel-item__details--title">Tittle</p>
            <p className="carousel-item__details--subtitle">2019 16+ 114 minutes</p>
        </div>
    </div>
);

export default CarouselItem;