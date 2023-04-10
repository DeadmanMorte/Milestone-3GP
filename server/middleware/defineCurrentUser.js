const db = require("../models");

const { User } = db;

// Checks for cookies.
async function defineCurrentUser(req, res, next) {
    try{
        let user = await User.findOne({
            where:{
                user_id:req.session.user_id
            }
        })
        req.currentUser = user
        next()
    } catch {
        next()
    }
}

module.exports = defineCurrentUser