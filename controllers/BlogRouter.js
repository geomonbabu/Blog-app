const express=require("express")
const router=express.Router()
const blogmodel = require("../models/BlogModel")

router.post("/addblog",async(req,res)=>{
    let data = req.body //value read
    let blog = new blogmodel(data)
    let result = await blog.save()
    res.json({
        status:"success"
    })
})
router.get("/viewblog",async(req,res)=>{
    let output = await blogmodel.find()
    res.json({
        output
    })
})
router.post("/searchblog",async(req,res)=>{
    let data = req.body //value read
    let output = await blogmodel.find(data)
    res.json(
        output
    )
})
module.exports=router