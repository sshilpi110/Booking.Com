const express = require("express")
const { updateUser, deleteUser, User, Users } = require("../controllers/users")
const { verifyToken, verifyUser } = require("../utils/verifyToken")


const userRoutes = express.Router()

userRoutes.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("Hello user , You are logged in !")
})

userRoutes.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("Hello user , You are logged in  & you can delete your account")
})

userRoutes.put("/:id", updateUser)

userRoutes.delete("/:id", deleteUser)

userRoutes.get("/:id", User)

userRoutes.get("/", Users)



module.exports = {
    userRoutes
}