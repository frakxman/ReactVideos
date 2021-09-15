import express from 'express';

const app = express();

app.get('*', ( req, res ) => {
    res.send({ hello: 'express'});
});

app.listen( 3000, ( err ) => {
    ( err ) ? console.error( err ) : console.log('Server runnig in port 3000');
});