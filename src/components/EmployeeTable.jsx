import "../styles/emptble.css"
import { FaEye, FaEdit, FaTrash } from "react-icons/fa"
function EmployeeTable({employees,onView,onDelete,onEdit}){
    return(
        <table className="emptable">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Employee ID</th>
                    <th>Department</th>
                    <th>Designation</th>
                    <th>Project</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {employees.length === 0 ? (
                    <tr>
                        <td colSpan="8" className="no">No records found</td>
                    </tr>
                ):(
                    employees.map((emp)=>(
                        <tr key = {emp._id}>
 
 <td>{emp.name}</td>
 <td>{emp.empId}</td>
 <td>{emp.department}</td>
 <td>{emp.designation}</td>
 <td>{emp.project}</td>
 <td>{emp.type}</td>
 <td>{emp.status}</td>
 <td className="ics"><FaEye className="view icon" onClick={()=>onView(emp)}></FaEye>
 <FaEdit className="edit icon" onClick={()=>onEdit(emp)}></FaEdit>
 <FaTrash className="delete icon" onClick={()=>{if(window.confirm("Are you sure you want to delete this employee?")){
    onDelete(emp._id)}}}></FaTrash>
 
 
 </td>



                        </tr>
                    ))
                )}
            </tbody>
        </table>
    )
}
export default EmployeeTable;