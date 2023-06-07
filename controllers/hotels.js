const { HotelModel } = require("../models/Hotels")
const jwt=require("jsonwebtoken")

const createHotel = async (req, res, next) => {
    const newHotel = new HotelModel(req.body)
    try {
        const saveHotel = await newHotel.save()
        res.status(200).json(saveHotel)
    } catch (err) {
        next(err)
    }
}

const updateHotel = async (req, res, next) => {
    try {
        const updateHotel = await HotelModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updateHotel)
    } catch (err) {
        next(err)
    }
}

const deleteHotel = async (req, res, next) => {
    try {
        await HotelModel.findByIdAndDelete(req.params.id)
        res.status(200).json(
            "hotel has been deleted !"
        )
    } catch (err) {
        next(err)
    }
}

const hotel = async (req, res, next) => {
    try {
        const Hotel = await HotelModel.findById(req.params.id)
        res.status(200).json(Hotel)
    } catch (err) {
        next(err)

    }
}

const hotels = async (req, res, next) => {
    try {
        const Hotels = await HotelModel.find()
        res.status(200).json(Hotels)
    } catch (err) {
        next(err)
    }
}

module.exports = {
    createHotel,
    updateHotel,
    deleteHotel,
    hotel,
    hotels
}