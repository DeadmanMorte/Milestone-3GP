const router = require('express').Router();
const db = require("../models");
const bcrypt = require('bcrypt');

const { User } = db;


router.get('/', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})

// POST update to db for "Users" table, creates cookies.  
router.post('/', async (req,res) => {
    let { password, ...rest} = req.body
    const user = await User.create({
        ...rest,
        passwordDigest: await bcrypt.hash(password,12)
    })
        res.json(user);
        req.session.user_id = user.user_id;
        

});





module.exports = router