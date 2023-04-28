const router = require('express').Router();
const db = require("../models");
const bcrypt = require('bcrypt');

const { User } = db;


router.get('/', async (req,res)=>{
    try {
        let user = await User.findOne({
            where: {
                user_id: req.session.user_id
            }
        })
        res.json(user)
        console.log('user found')
    } catch {
        console.log('No account found error')
        res.json(null)
    };
});

// POST update to db for "Users" table, creates cookies.  
router.post('/', async (req,res) => {
    let { password, ...rest} = req.body
    const user = await User.create({
        ...rest,
        passwordDigest: await bcrypt.hash(password,12)
    })
        res.json(user);
        req.session.user_id = user.user_id;
        console.log('woof')

});





module.exports = router