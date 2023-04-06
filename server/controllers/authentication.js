// Authentication dependencies
const router = require('express').Router();
const db = require("../models");
const bcrypt = require('bcrypt');

const { User } = db;

router.post('/', async (req,res) => {
    let user = await User.findOne({
        where: { username: req.body.username }
    })
    if (!user || !await bcrypt.compare(req.body.password, user.passwordDigest)) {
        res.status(404).json({ message: 'Could not find username with that username and password'})
    } else {
        req.session.userId = user.userId;
        res.json({user})
    }
})

router.get('/profile', async (req, res) => {
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




// const hashedPassword = await bcrypt.hash(req.body.password,12);
// const user = { name: req.body.username, password:hashedPassword };
// const result = await bcrypt.compare(password, user.password);

// try {
//     if(result == true){
//         console.log(`Login successful! Welcome ${user.name}`);
//     } else {
//         console.log('Login Failed');
//     }
// } catch (error) {
//     console.log("Something went wrong.", error)
// }
