import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Actions 
import { setFavorite, deleteFavorite } from '../actions';

// Styles 
import '../assets/styles/components/CarouselItem.scss';
import play from '../assets/statics/play.png';
import plus from '../assets/statics/plus.png';
import remove from '../assets/statics/delete.png';

const CarouselItem = ( props ) => {
    const { contentRating, cover, duration, id, isList, title, year } = props;

    const handleSetFavorite = () => {
        props.setFavorite({ contentRating, cover, duration, id, title, year });
    };

    const handleDeleteFavorite = ( id ) => {
        props.deleteFavorite( id );
    };

    return (
        <div className="carousel-item">
            <img className="carousel-item__img" src={ cover } alt={ title }  />
            <div className="carousel-item__details">
                <div>
                    <Link to={`/player/${ id }`}>
                        <img
                            className="carousel-item__details--img"
                            src={ play }
                            alt="Play Icon"
                        />
                    </Link>
                    { isList ?  
                        <img
                            className="carousel-item__details--img"
                            src={ remove }
                            alt="Play Icon"
                            onClick={ () => handleDeleteFavorite( id ) }
                        />
                        :
                        <img
                            className="carousel-item__details--img"
                            src={ plus }
                            alt="Plus Icon"
                            onClick={ handleSetFavorite }
                        />
                    }
                </div>
                <p className="carousel-item__details--title">{ title }</p>
                <p className="carousel-item__details--subtitle">{`${ year } ${ contentRating } ${ duration}`}</p>
            </div>
        </div>
    );
};

CarouselItem.propTypes = {
    contentRating: PropTypes.string,
    cover: PropTypes.string,
    duration: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string,
    year: PropTypes.number
} 

const mapDispatchToProps = {
    setFavorite,
    deleteFavorite,
}
export default connect( null, mapDispatchToProps ) ( CarouselItem );