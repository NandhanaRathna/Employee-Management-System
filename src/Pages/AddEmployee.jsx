import React from 'react'
import { useState,useEffect } from 'react'
import "../styles/addEmployee.css"

function AddEmployee({addEmployee,editData}) {
  const [formData,setFormData] = useState({
    name:"",
    empId:"",
    department:"",
    designation:"",
    project:"",
    type:"",
    status:""
  })
  const [image,setImage] = useState(null)


  useEffect(()=>{
    if(editData){
      setFormData({
        name: editData.name || "",
        empId: editData.empId || "",
        department: editData.department || "",
        designation: editData.designation || "",
        project : editData.project || "",
        type:editData.type || "",
        status: editData.status || ""})
            setImage(editData.image || null)
    }else{
      setFormData({
        name : "",
        empId:"",
        department:"",
        project:"",
        type:"",
        status:""
      })
      setImage(null)
    }
  },[editData])

const handleChange = (e)=>{
  setFormData({
    ...formData,[e.target.name]:e.target.value})
}

const handleImage =(e)=>{
  const file  = e.target.files[0]
  if(file){
    const imageUrl = URL.createObjectURL(file)
    setImage(imageUrl)
  }
}
 const handleSubmit = (e)=>{
  e.preventDefault()
  addEmployee({
    ...formData,image:image
  })
  
 }

  return (
    <div className='forms'>
      <h2>{editData ? "Edit Employee" : "Add New Employee"}</h2>
      <p style={{color:"blue" , fontWeight:"bolder",fontSize:"32px"}}> Personal Information</p> <hr /><br />
      <div className='formb'>
         <form onSubmit={handleSubmit} className='form-grid'>
           <div className='prof'>
              <label className='upload'>
                {image? (
                  <img src={image} alt="" className='pre'/>
                ):(
                "📷")} <input type="file" hidden onChange={handleImage}/> </label>
           </div>
        <div className='ne'>
          <label>Name*</label>
        <input type="text" name='name' placeholder='Enter name' onChange={handleChange} />

        </div>
        <div>
          <label >Employee ID*</label>
        <input type="text" name='empId' placeholder='Enter employee ID' onChange={handleChange} />

        </div>
        <div>
          <label>Department*</label>
        <select name="department" onChange={handleChange}>
          <option value="">Select Department</option>
          <option value="Design">Design</option>
          <option value="Development">Developer</option>
          <option value="HR">HR</option>
        </select>
        </div>

          <div>
          <label>Designation*</label>
        <select name="designation" onChange={handleChange}>
          <option value="">Select Designation </option>
          <option value="Design Lead">Design Lead</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer </option>
        </select>
        </div>
        <div>
          <label >Project*</label>
          <input type="text"  name='project'placeholder='Enter Project' onChange={handleChange}/>
        </div>
        <div>
          <label >Type*</label>
          <select name="type" onChange={handleChange} id="">
            <option value="">Select Type</option>
            <option value="office">Office</option>
            <option value="Remote">Remote</option>
          </select>
        </div>
        <div>
          <label>Status*</label>
          <select name="status" onChange={handleChange} id="">
            <option value="">Select Status</option>
            <option value="Permanent">Permanent</option>
            <option value="Temporary">Temporary</option>
          </select>
        </div>
        <div className='btns'>
        <button type='submit' className='confirm'>{editData ? "Update":"Confirm"}</button>
        <button type='button' className='cancel'>Cancel</button>

        </div>
      </form>
      </div>
     
    </div>
  )
}

export default AddEmployee
