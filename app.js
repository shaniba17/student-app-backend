const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {studentmodel}=require("./models/student")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://shanibatm17:shaniba17tm@cluster0.h4a3e.mongodb.net/studentdb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input=req.body
    let student=new studentmodel(input)
    student.save()
    res.send({"status":"success"})
})


app.post("/search",(req,res)=>{
    res.send("test")
})

app.get("/view",(req,res)=>
{
    studentmodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )

})
app.listen(8080,()=>{
    console.log("server started")
})