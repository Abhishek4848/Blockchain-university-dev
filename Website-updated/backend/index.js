const express=require('express');
const app=express();
const cors=require('cors');
const dotenv=require('dotenv')
const mongoose=require('mongoose')
dotenv.config();
const userRoutes=require('./routes/users');
const enrollRoutes=require('./routes/enroll')
const authRoutes=require('./routes/auth');
const courseRoutes=require('./routes/courses')
const paymentRoutes=require('./routes/payment')
const mycourseRoutes=require('./routes/mycourse')

var database

try {
    mongoose.connect(process.env.DB,  {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    database=mongoose.connection;
    console.log("Connected to database successfully");
} catch (error) {
    console.log(error);
    console.log("Could not connect database!");
}

app.use(express.json())
app.use(cors());

app.use("/register",userRoutes);
app.use("/login",authRoutes);
app.use("/courses",courseRoutes);
app.use("/payment/",paymentRoutes)
app.use("/enroll/",enrollRoutes);
app.use("/fetchmycourses/",mycourseRoutes);

app.get('/fetchcourses',(req,res)=>{
    database.db.collection('courses').find({}).toArray((err,result)=>{
        if(err) throw err
        res.send(result)
    })
})

app.get('/fetchcertificates',(req,res)=>{
    database.db.collection('certificates').find({}).toArray((err,result)=>{
        if(err){
            console.log(err)
            res.send({})}
        else{
        res.send(result)}
    })
})

app.get("/getssn/:id", (req, res)=>{
    let ssn = req.params.id
    console.log("adios"+ssn);
    database.db.collection("users").findOne({"ssn":ssn}, function(err, data) {
        if (err) throw err
        console.log(data)
        res.send(data);
    })
})

const port=process.env.PORT||8050;
app.listen(port,()=>console.log('Listening on port '+ port + '...'));