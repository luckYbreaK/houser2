require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env

// MIDDLEWARE
app.use(bodyParser.json());


// ENDPOINTS


massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);

    app.listen(SERVER_PORT, () => {
        console.log(`Chips ahoy on port ${SERVER_PORT}!`);
    });
}).catch(err => console.log(err));

