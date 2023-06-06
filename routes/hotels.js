const express = require("express")
const { HotelModel } = require("../models/Hotels")
const hotelRoutes = express.Router()
hotelRoutes.post("/", async (req, res) => {
    const newHotel = new HotelModel(req.body)
    try {
        const saveHotel = await newHotel.save()
        res.status(200).json(saveHotel)
    } catch (err) {
        res.status(500).json(err)
    }
})

hotelRoutes.put("/:id", async (req, res) => {
    try {
        const updateHotel = await HotelModel.findByIdAndUpdate(req.params.id, { $set: req.body },{new:true})
        res.status(200).json(updateHotel)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = {
    hotelRoutes
}