const express = require("express")
const { updateUser, deleteUser, User, Users } = require("../controllers/users")
const { verifyToken, verifyUser, verifyAdmin } = require("../utils/verifyToken")


const userRoutes = express.Router()

userRoutes.get("/checkauthenticationm", verifyToken, (req, res, next) => {
    res.send("Hello user , You are logged in !")
})

userRoutes.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("Hello user , You are logged in  & you can delete your account")
})

userRoutes.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
    res.send("Hello admin , You are logged in  & you can delete all accounts")
})

userRoutes.put("/:id", verifyUser, updateUser)

userRoutes.delete("/:id", verifyUser, deleteUser)

userRoutes.get("/:id", verifyUser, User)

userRoutes.get("/", verifyAdmin, Users)



module.exports = {
    userRoutes
}