import "../styles/emptble.css"
function EmployeeTable({employees}){
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
                        <tr key = {emp.id}>
 
 <td>{emp.name}</td>
 <td>{emp.empId}</td>
 <td>{emp.department}</td>
 <td>{emp.designation}</td>
 <td>{emp.project}</td>
 <td>{emp.type}</td>
 <td>{emp.status}</td>
 <td>👁 ✏ 🗑</td>



                        </tr>
                    ))
                )}
            </tbody>
        </table>
    )
}
export default EmployeeTable;