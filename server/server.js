require('dotenv').config();
const sqlite3 = require('sqlite3').verbose
const express = require('express');
const { Sequelize } = require('sequelize');
const app = express();
const sequelize = new Sequelize(process.env.PG_URI)

app.use('/users', require('./controllers/users'))

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

app.listen(process.env.PORT, () => {
    console.log(`server is running on ${process.env.PORT}`);
})