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

<<<<<<< HEAD
router.get('/self', async (req, res) => {
=======
router.get('/profile', async (req, res) => {
    res.send("profile working")
>>>>>>> 5c775d7f2015a91ee5d9526ab07a34f44c6c6bdc
    try {
        let user = await User.findOne({
            where: {
                user_id: req.session.userId
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
