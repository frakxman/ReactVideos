import React from 'react';
import PropTypes from 'prop-types';

// Styles 
import '../assets/styles/components/CarouselItem.scss';
import play from '../assets/statics/play.png';
import plus from '../assets/statics/plus.png';

const CarouselItem = ({ contentRating, cover, duration, id, title, year }) => (
    <div className="carousel-item">
        <img className="carousel-item__img" src={ cover } alt={ title }  />
        <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details--img" src={ play } alt="Play Icon" />
                <img className="carousel-item__details--img" src={ plus } alt="Plus Icon" />
            </div>
            <p className="carousel-item__details--title">{ title }</p>
            <p className="carousel-item__details--subtitle">{`${ year } ${ contentRating } ${ duration}`}</p>
        </div>
    </div>
);

CarouselItem.propTypes = {
    contentRating: PropTypes.string,
    cover: PropTypes.string,
    duration: PropTypes.number,
    title: PropTypes.string,
    year: PropTypes.number
} 

export default CarouselItem;