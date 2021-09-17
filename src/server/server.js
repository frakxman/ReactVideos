import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import helmet from 'helmet';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import serverRoutes from '../frontend/routes/serverRoutes';
import getManifest from './getManifest';

import initialState from '../frontend/initialState';

// Reducer 
import reducer from '../frontend/reducers';

dotenv.config();
const { ENV, PORT } = process.env;
const app = express();

if ( ENV === 'development' ) {
    console.log('Development config');
    const webpackConfig = require('../../webpack.config');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const compiler = webpack( webpackConfig );
    const serverConfig = { serverSideRender: true };

    app.use( webpackDevMiddleware( compiler, serverConfig ) );
    app.use( webpackHotMiddleware( compiler ) );
} else {
    app.use(( req, res, next ) => {
        if ( !req.hashManifest ) req.hashManifest = getManifest();
        next();
    });
    app.use( express.static(`${__dirname}/public`));
    app.use( helmet());
    app.use( helmet.permittedCrossDomainPolicies() );
    app.use(
        helmet.contentSecurityPolicy({
            useDefaults: false,
            directives: {
                defaultSrc: ["'self'"],
                "img-src": ["'self'", "dummyimage.com"],
                "font-src": ["'self'", "fonts.gstatic.com"],
                "script-src": [
                "'self'",
                "'sha256-fqAyYQw90BvHA2X8Dgsi3fckwxSvBr0kTnVVFxqUOls='",
                ],
                "style-src": ["'self'", "fonts.googleapis.com"],
            },
        })
    );
    app.disable('x-powered-by');
}

const setResponse = ( html, preloadedState, manifest ) => {
    const mainStyles = manifest ? manifest['main.css'] : 'assets/app.css';
    const mainBuild = manifest ? manifest['main.js'] : 'assets/app.js';
    return (`
        <!DOCTYPE html>
            <html>
                <head>
                <link rel="stylesheet" href="${ mainStyles }" type="text/css">
                    <title>React Videos</title>
                </head>
                <body>
                    <div id="app">${ html }</div>
                    <script>
                        window.__PRELOADED_STATE__ = ${ JSON.stringify( preloadedState ).replace(/</g, '\\u003c') }
                    </script>
                    <script src="${ mainBuild }" type="text/javascript"></script>
                </body>
            </html>
    `);
};

const renderApp = ( req, res ) => {
    if( ENV != "development" ){
        res.set("Content-Security-Policy", "default-src'self'; img-src'self' https://dummyimage.com; style-src-elem 'self' https://fonts.googleapis.com; font-src https://fonts.gstatic.com");
    }
    const store = createStore( reducer, initialState );
    const preloadedState = store.getState();
    const html = renderToString(
        <Provider store={ store }>
            <StaticRouter location={ req.url } context={{}}>
                { renderRoutes( serverRoutes )}
            </StaticRouter>
        </Provider>,
    );

    res.send( setResponse( html, preloadedState, req.hashManifest ) )
};

app.get('*', renderApp);

app.listen( PORT, ( err ) => {
    ( err ) ? console.error( err ) : console.log(`Server runnig mode ${ ENV } in port ${ PORT }`);
});