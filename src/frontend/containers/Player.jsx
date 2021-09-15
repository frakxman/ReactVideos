import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { getVideoSource } from "../actions";

// Container
import NotFound from "./NotFound";

// Styles 
import '../assets/styles/components/Player.scss';

const Player = ( props ) => {
    const { id } = props.match.params;
    const hasPlaying = Object.keys(props.playing).length > 0;
    useEffect(() => {
        props.getVideoSource( id );
    }, []);
    return !hasPlaying ? <NotFound /> : (
        <div className="Player">
            <video controls autoPlay>
                <source src={ props.playing.source } type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
            <div className="Player-back">
                <button type="button" onClick={ () => props.history.goBack() }>
                    Return
                </button>
            </div>
        </div>
    );
};

Player.propTypes = {
    getVideoSource: PropTypes.func,
};

const mapStateToProps = state => {
    return {
        playing: state.playing,
    };
};

const mapDispatchToProps = {
    getVideoSource,
};

export default connect( mapStateToProps, mapDispatchToProps )( Player );