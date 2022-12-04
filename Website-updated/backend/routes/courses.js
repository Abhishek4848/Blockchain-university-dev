const router = require("express").Router();
const Course = require('../models/course');

router.post("/", (req, res)=> {
    const { name, category, fee,link,cby} = req.body
    Course.findOne({name: name}, (err, course) => {
        if(course){
            res.send({message: "Course already registered"})
        } else {
            const course = new Course({
                name,
                category,
                fee,
                link,
                cby
            })
            course.save(err => {
                if(err) {
                    res.send(err);
                    return;
                } else {
                    res.send( { message: "successfully registered course"  })
                    return(res.json)
                }
            })
        }
    })
})
module.exports=router;