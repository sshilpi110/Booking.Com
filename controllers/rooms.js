const { RoomModel } = require("../models/Room")
const { HotelModel } = require("../models/Hotels")
const { createError } = require("../utils/error")

const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId
    const newRoom = new RoomModel(req.body)
    try {
        const savedRoom = await newRoom.save()
        try {
            await HotelModel.findByIdAndUpdate(hotelId, { $push: { rooms: savedRoom._id } })
        } catch (err) {
            next(err)
        }
        res.status(200).json(savedRoom)
    } catch (err) {
        next(err)
    }

}


const updateRoom = async (req, res, next) => {
    try {
        const updateRoom = await RoomModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updateRoom)
    } catch (err) {
        next(err)
    }
}

const deleteRoom = async (req, res, next) => {
    try {
        await RoomModel.findByIdAndDelete(req.params.id)
        res.status(200).json(
            "hotel has been deleted !"
        )
    } catch (err) {
        next(err)
    }
}

const room = async (req, res, next) => {
    try {
        const Room = await RoomModel.findById(req.params.id)
        res.status(200).json(Room)
    } catch (err) {
        next(err)

    }
}

const rooms = async (req, res, next) => {
    try {
        const Rooms = await RoomModel.find()
        res.status(200).json(Rooms)
    } catch (err) {
        next(err)
    }
}

module.exports = {
    createRoom,
    updateRoom,
    deleteRoom,
    room,
    rooms
}