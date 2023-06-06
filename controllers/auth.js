const { UserModel } = require("../models/User")
const bcrypt = require("bcrypt")
const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(5);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new UserModel({
            username: req.body.username,
            email: req.body.email,
            password: hash
        })
        await newUser.save()
        res.status(200).send("User has been registered !")
    } catch (err) {
        next(err)
    }
}
module.exports = {
    register
}