const router = require("express").Router();
const Course = require('../models/course');

router.post("/", (req, res)=> {
    const { name, se} = req.body
    Course.findOne({name: name,se:se}, (err, course) => {
        if(course){
            res.send({message: "You have already Enrolled for this course"})
        } else {
            Course.findOne({name: name}, (err, course) => {
            course.se.push(se)
            
            course.save(err => {
                if(err) {
                    res.send(err);
                    return;
                } else {
                    res.send( { message: "Successfully Enrolled"  })
                    return(res.json)
                }})
            })}
        })
    })
module.exports=router;