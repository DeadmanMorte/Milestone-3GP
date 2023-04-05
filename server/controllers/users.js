const router = require('express').Router()


router.get('/', (req,res)=>{
    res.send("user route works");
})

module.exports = router