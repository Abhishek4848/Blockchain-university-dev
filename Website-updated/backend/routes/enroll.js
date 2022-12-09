const router = require("express").Router();
const Course = require('../models/course');

router.post("/check", (req, res)=> {
    const { name, se} = req.body

    Course.findOne({name: name,se:se}, (err, course) => {
        if(err) throw err
        res.send(course)
        })
    })

    router.post("/store", (req, res)=> {
        const { name, se} = req.body
        Course.findOne({name: name}, (err, course) => {
                course.se.push(se)
                
                course.save(err => {
                    if(err) {
                        res.send(err);
                        return;
                    }
                    else {
                        res.send( { message: "Successfully Enrolled"  })
                        return(res.json)
                    }})
                })})
module.exports=router;