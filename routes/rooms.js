const express=require("express")
const {createRoom,updateRoom,deleteRoom,room,rooms}=require("../controllers/rooms")
const {verifyAdmin}=require("../utils/verifyToken")
const roomRoutes= express.Router()

roomRoutes.post("/:hotelId", verifyAdmin, createRoom)

roomRoutes.put("/:id", verifyAdmin, updateRoom)

roomRoutes.delete("/:id", verifyAdmin, deleteRoom)

roomRoutes.get("/:id", room)

roomRoutes.get("/", rooms)


module.exports={
    roomRoutes
}