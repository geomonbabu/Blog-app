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


module.exports=router