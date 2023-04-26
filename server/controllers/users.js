const router = require('express').Router();
const db = require("../models");
const bcrypt = require('bcrypt');

const { User } = db;


<<<<<<< HEAD
router.get('/', async (req,res)=>{
    try {
        let user = await User.findOne({
            where: {
                userId: req.session.userId
            }
        })
        res.json(user)
    } catch {
        console.log('No account found error')
        res.json(null)
    };
});
=======
router.get('/', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})
>>>>>>> 93b82f384c4b0014883eaa9ca07104d202304cfa

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