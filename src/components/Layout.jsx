import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import "../styles/layout.css"
import { useState } from "react"
import EmployeeTable from "../components/EmployeeTable"
import AddEmployee from "../Pages/AddEmployee"

function Layout() {
  const [employees,setEmployees]=useState([])
  const [showForm,setShowForm]=useState(false)

 const addEmployee = (emp) => {
  setEmployees([...employees,emp])
  setShowForm(false)
 }

  return (
  <div className="layout"><Sidebar />
    <div className="main"><Header openForm={()=>setShowForm(true)}  showForm={showForm}/>
      <div className="content">
        {showForm ? ( <AddEmployee addEmployee = {addEmployee}/>
        ):(
          <>
          <h2>Employee</h2>
          <EmployeeTable employees={employees}/>

          </>
         )}

        

      </div>
    </div>
 </div>

  )
}
export default Layout