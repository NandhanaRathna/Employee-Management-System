import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import "../styles/layout.css"
import { useState , useEffect } from "react"
import EmployeeTable from "../components/EmployeeTable"
import AddEmployee from "../Pages/AddEmployee"

function Layout() {
  const [employees,setEmployees]=useState([])
  const [showForm,setShowForm]=useState(false)
  const [selectedEmp,setSelectedEmp]=useState(null)

  useEffect(()=>{
    fetch("http://localhost:5000/employees")
    .then(res=> res.json())
    .then(data=>setEmployees(data))

  },[])

   const addEmployee =  async(emp)=>{
    await fetch("http://localhost:5000/add",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(emp)
    })
    const res=await fetch("http://localhost:5000/employees")
    const data = await res.json()
    setEmployees(data)
 setShowForm(false)
   }
   const deleteEmployee = async(id)=>{
    await fetch (`http://localhost:5000/delete/${id}`,{
      method:"DELETE"
    })
    const res = await fetch("http://localhost:5000/employees")
    const data = await res.json()
    setEmployees(data)
   }






  return (
  <div className="layout"><Sidebar />
  
    <div className="main"><Header openForm={()=>setShowForm(true)}  showForm={showForm}/>
      <div className="content">
        {selectedEmp ? (
         
<div>
  <h2>Employee Details</h2>
  <p><b>Name:</b>{selectedEmp.name}</p>
  <p><b>ID:</b>{selectedEmp.empId}</p>
  <p><b>Department:</b>{selectedEmp.department}</p>
  <p><b>Designation:</b>{selectedEmp.designation}</p>
  <p><b> Project:</b>{selectedEmp.project}</p>
  <p><b>Status:</b>{selectedEmp.status}</p>
  <p><b>Type:</b>{selectedEmp.type}
  </p>
  <button onClick={()=>setSelectedEmp(null)}>⬅Back</button>
  </div>
 ): showForm ? (
  <AddEmployee addEmployee={addEmployee}/>

 ):(
  <>
    <h2>Employee</h2>
          <EmployeeTable employees={employees}
          onView = {(emp)=>setSelectedEmp(emp)}
          onDelete={(id)=>deleteEmployee(id)}/>

          </>

 )}
</div>
    </div>
 </div>

  )
}
export default Layout