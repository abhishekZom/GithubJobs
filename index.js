const express = require('express');
const path = require('path');
const request = require('async-request');;
const morgan = require('morgan');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
// logger utility
app.use(morgan('common'));

app.get('/api/listings', async (req, res) => {
    try {
        const response = await request(`https://jobs.github.com/positions.json?description=${req.query.description}`);
        res.send(response.body);
    } catch(e) {
        console.log(e);
    }
});

app.get('/api/listings/details', async (req, res) => {
    try {
        const response = await request(`https://jobs.github.com/positions/${req.query.id}.json`);
        res.send(response.body);
    } catch(e) {
        console.log(e);
    }
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);