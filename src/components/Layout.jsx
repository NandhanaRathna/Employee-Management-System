import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import "../styles/layout.css"
import { useState } from "react"
import EmployeeTable from "../components/EmployeeTable"

function Layout() {
  const [employees,setEmployees]=useState([])
  return (
  <div className="layout"><Sidebar />
    <div className="main"><Header />
      <div className="content">
        <h2>Employee </h2>

        <EmployeeTable employees={employees}/>

      </div>
    </div>
 </div>

  )
}
export default Layout