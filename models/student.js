const mongoose=require("mongoose")
const schema=mongoose.Schema({
    "name":String,
    "rollno":String,
    "college":String,
    "address":String
})

let studentmodel=mongoose.model("students",schema);
module.exports={studentmodel}