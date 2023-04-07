// Authentication dependencies
const router = require('express').Router();
const db = require("../models");
const bcrypt = require('bcrypt');

const { User } = db;

router.get('/',(req,res)=>{
    res.send('auth works')
})

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

router.get('/self', async (req, res) => {
    res.json(req.currentUser)
})

router.get('/profile', async (req, res) => {
    res.send("profile working")
    try {
        let user = await User.findOne({
            where: {
                userId: req.session.userId
            }
        })
        res.json(user)
    } catch {
        res.json(null)
    }
})
  

module.exports = router


