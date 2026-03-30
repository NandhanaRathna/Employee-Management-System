const mongoose = require("mongoose")
const employeeSchema = new mongoose.Schema({
    name: String,
    empId:String,
    department: String,
    designation:String,
    project:String,
    type:String,
    status:String,
    image:String
})

module.exports = mongoose.model("Employees",employeeSchema)