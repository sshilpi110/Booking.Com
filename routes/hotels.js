const express=require("express")
const { HotelModel } = require("../models/Hotels")
const hotelRoutes= express.Router()
hotelRoutes.post("/",async(req,res)=>{
    const newHotel=new HotelModel(req.body)
    try{
      const saveHotel= await newHotel.save()  
      res.status(200).json(saveHotel)
    }catch(err){
       res.status(500).json(err)
    }
})

module.exports={
    hotelRoutes
}