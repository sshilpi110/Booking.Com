const express=require("express")
const router= express.Router()

router.get("/",(req,res)=>{
    res.send("Auth end point !")
})
router.get("/register",(req,res)=>{
    res.send("This is Auth register end point !")
})

module.exports={
    router
}