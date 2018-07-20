require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const {SERVER_PORT} = process.env

// MIDDLEWARE
app.use(bodyParser.json());


// ENDPOINTS


app.listen(SERVER_PORT, () => {
    console.log(`Chips ahoy on port ${SERVER_PORT}!`);
});