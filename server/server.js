require('dotenv').config();
const express = require('express');
const { Sequelize } = require('sequelize');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
const sequelize = new Sequelize(process.env.PG_URI)

app.use(cors({
   origin: 'http:local//host:4000',
   credentials: true
}))

app.use('/users', require('./controllers/users'))
app.use('/authentication', require('./controllers/authentication'))
app.use('/publish', require('./controllers/publish'))

app.listen(process.env.PORT, () => {
    console.log(`server is running on ${process.env.PORT}`);
})