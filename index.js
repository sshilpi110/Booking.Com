const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cookieParser=require("cookie-parser")
const { router } = require("./routes/auth")
const { hotelRoutes } = require("./routes/hotels")
const { roomRoutes } = require("./routes/rooms")
const { userRoutes } = require("./routes/users")
const { HotelModel } = require("./models/Hotels")
const {UserModel} =require("./models/User")
const { createError } = require("./utils/error")

const app = express()
app.use(express.json())
app.use(cookieParser())

dotenv.config()
app.use("/auth", router)
app.use("/hotels", hotelRoutes)
app.use("/rooms", roomRoutes)
app.use("/users", userRoutes)



const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("connected to mongoDB.")
    } catch (err) {
        console.log(err)
    }
}

mongoose.connection.on("Disconnected", () => {
    console.log("MongoDB Disconnected !")
})

mongoose.connection.on("connected", () => {
    console.log("MongoDB connected !")
})


app.listen(8080, () => {
    connection()
    console.log("server is running at port 8080")
})