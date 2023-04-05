// Modules and Globals
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const {Sequelize} = require('sequelize');
const cookieSession = require('cookie-session');

const sequelize = new Sequelize(process.env.PG_URI);

// cookie code
app.use(cookieSession({
    name: 'session',
    sameSite:'strict',
    keys: [ process.env.SESSION_SECRET ],
    maxAge: 24 * 60 * 60 * 1000
}));


app.use(cors({
   origin: 'http:local//host:4000',
   credentials: true
}))

//Express Settings
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Controller & Routes
app.use('/users', require('./controllers/users'))
app.use('/authentication', require('./controllers/authentication'))
app.use('/publish', require('./controllers/publish'))


// Listen for Connection
app.listen(process.env.PORT, () => {
    console.log(`server is running on ${process.env.PORT}`);
})