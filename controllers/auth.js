const { UserModel } = require("../models/User")
const bcrypt = require("bcrypt");
const { createError } = require("../utils/error");
const jwt = require("jsonwebtoken")

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


const login = async (req, res, next) => {
    try {

        const user = await UserModel.findOne({ email: req.body.email })
        if (!user) return next(createError(404, "user not found"))
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if (!isPasswordCorrect) return next(createError(400, "wrong user or password"))

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT)
        // res.send({ "User": user, "token": token })
        const { password, isAdmin, ...otherDetails } = user._doc
        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).send({ ...otherDetails })
    } catch (err) {
        next(err)
    }
}
module.exports = {
    register, login
}