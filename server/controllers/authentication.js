// Authentication dependencies
const router = require('express').Router();
const db = require("../models");
const bcrypt = require('bcrypt');

const { User } = db;



// Verify/login user and create cookies.
router.post('/', async (req,res) => {
    let user = await User.findOne({
        where: { username: req.body.username}
        
    })
    if (!user || !await bcrypt.compare(req.body.password, user.passwordDigest)) {
        res.status(404).json({ message: 'Could not find username with that username and password'})
    } else {
        req.session.user_id = user.user_id;
        res.json({user})
    }
})

// Confirm credentials/ cookies. 

router.get('/self', async (req, res) => {
    res.json(req.currentUser)
    })

router.get('/profile', async (req, res) => {
    try {
        let user = await User.findOne({
            where: {
                user_id: req.session.user_id
            }
        })
        res.json(user);
        console.log("profile working");
    } catch {
        res.json(null);
    }
})
  

module.exports = router


