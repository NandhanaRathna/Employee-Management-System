const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const Employee = require("./models/Employee")
const app = express()

app.use(cors())
app.use(express.json())

app.post("/add",async (req,res)=>{
    try{
        const newEmp = new Employee(req.body)
        await newEmp.save()
        res.json({message:"employee addded successfully"})}
        catch(err){
            res.status(500).json({error: err.message})
        }
    }
)

app.get("/employees",async(req,res)=>{
    try{
        const employees = await Employee.find()
        res.json(employees)}
        catch(err){
            res.status(500).json({error: err.message})
        }
    }
)
app.delete("/delete/:id",async(req,res)=>{
    try{
        await Employee.findByIdAndDelete(req.params.id)
        res.json({message:"Employee deleted successfully"})
    } catch(err){
        res.status(500).json({error:err.message})
    }
    }
)
mongoose.connect("mongodb://localhost:27017/employeesdata")
 .then(()=>console.log("MongoDB Connected"))
 .catch(err => console.log(err))

 app.put("/update/:id",async (req,res)=>{
    try{
        const updatedEmployee = await Employee.findByIdAndUpdate(
            req.params.id,
            req.body,
            {returnDocument:"after"}
        )
        res.json({
            message:"Employee updated successfully",
            employee: updatedEmployee
        })}
        catch(err){
           res.status(500).json({error: err.message})
        }
    }
 )

 app.listen(5000,()=>{
    console.log("server running on port 5000")
 })