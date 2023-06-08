const { createHotel, updateHotel, deleteHotel, hotel, hotels } = require("../controllers/hotels")
const {verifyAdmin}=require("../utils/verifyToken")
const express = require("express")

const hotelRoutes = express.Router()

hotelRoutes.post("/", verifyAdmin, createHotel)

hotelRoutes.put("/:id", verifyAdmin, updateHotel)

hotelRoutes.delete("/:id", verifyAdmin, deleteHotel)

hotelRoutes.get("/:id", hotel)

hotelRoutes.get("/", hotels)

module.exports = {
    hotelRoutes
}