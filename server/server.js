// Modules and Globals
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const {Sequelize} = require('sequelize');
const cookieSession = require('cookie-session');


// cookie code
app.use(cookieSession({
    name: 'session',
    sameSite:'strict',
    keys: [ process.env.SESSION_SECRET ],
    maxAge: 24 * 60 * 60 * 1000
}));

app.use(cors({
    origin:`http:localhost:${process.env.PORT}`,
    credentials: true
}));

//Express Settings
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Controller & Routes
app.use('/users', require('./controllers/users'));
app.use('/authentication', require('./controllers/authentication'));

// Listen for Connection
app.listen(process.env.PORT, () => {
    console.log(`server is running on ${process.env.PORT}`);
})