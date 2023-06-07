const { UserModel } = require("../models/User")
const jwt=require("jsonwebtoken")



const updateUser = async (req, res, next) => {
    try {
        const updateUser = await UserModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updateUser)
    } catch (err) {
        next(err)
    }
}

const deleteUser = async (req, res, next) => {
    try {
        await UserModel.findByIdAndDelete(req.params.id)
        res.status(200).json(
            "User has been deleted !"
        )
    } catch (err) {
        next(err)
    }
}

const User = async (req, res, next) => {
    try {
        const user = await UserModel.findById(req.params.id)
        res.status(200).json(user)
    } catch (err) {
        next(err)

    }
}

const Users = async (req, res, next) => {
    try {
        const users = await UserModel.find()
        res.status(200).json(users)
    } catch (err) {
        next(err)
    }
}

module.exports = {
    updateUser,
    deleteUser,
    User,
    Users
}