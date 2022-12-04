const router = require("express").Router();
const Course = require('../models/course');

var ste;

router.post("/postn", (req, res)=> {
    const {se} = req.body
    ste=se
})

router.get('/getc',(req,res)=>{
    
    Course.find({se:ste},(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})
module.exports=router;