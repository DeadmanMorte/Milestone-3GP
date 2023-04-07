// Modules and Globals
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const {Sequelize} = require('sequelize');
const cookieSession = require('cookie-session');
const defineCurrentUser = require('./middleware/defineCurrentUser');
const sqlite3 = require('sqlite3');
const sequelize = new Sequelize(process.env.PG_URI);

// cookie code
app.use(cookieSession({
    name: 'session',
    keys: [ process.env.SESSION_SECRET ],
    maxAge: 24 * 60 * 60 * 1000
}));


app.use(cors({
   origin: 'http://localhost:3000',
   credentials: true
}))

//Express Settings

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(defineCurrentUser);

// Controller & Routes
app.use('/users', require('./controllers/users'))
app.use('/authentication', require('./controllers/authentication'))
app.use('/publish', require('./controllers/publishs'))


// Listen for Connection
app.listen(process.env.PORT, () => {
    console.log(`server is running on ${process.env.PORT}`);
})