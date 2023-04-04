const router = require('express').Router();
const db = require("../models");
const bcrypt = require('bcrypt');

const { User } = db;

router.get('/users', (req,res)=>{
    res.send("user route works");
});

router.post('/', async (req,res) => {
    let { password, ...rest} = req.body
    const user = await User.create({
        ...rest,
        hashedPassword: await bcrypt.hash(password,12)
    })
        res.json(user)
});





module.exports = router