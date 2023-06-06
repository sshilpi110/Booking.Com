const { createHotel,updateHotel, deleteHotel,hotel,hotels } = require("../controllers/hotels")
const express = require("express")

const hotelRoutes = express.Router()

hotelRoutes.post("/", createHotel)

hotelRoutes.put("/:id",updateHotel)

hotelRoutes.delete("/:id", deleteHotel)

hotelRoutes.get("/:id",hotel)

hotelRoutes.get("/",hotels)

module.exports = {
    hotelRoutes
}