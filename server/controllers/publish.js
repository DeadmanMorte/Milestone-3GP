const router = require('express').Router()

router.get('/', (req,res)=>{
    res.send("publish route works");
})

module.exports = router