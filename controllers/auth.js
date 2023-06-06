const { UserModel } = require("../models/User")

const register = async (req, res, next) => {
    try {
        const newUser = new UserModel({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
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