const router = require('express').Router()

router.get('/users', (req,res)=>{
    res.send("user route works");
})

module.exports = router