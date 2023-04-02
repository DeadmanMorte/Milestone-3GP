require('dotenv').config();
const express = require('express');
const app = express();

app.use('/users', require('./controllers/users'))


app.listen(process.env.PORT, () => {
    console.log(`server is running on ${process.env.PORT}`);
})