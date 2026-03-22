import "../styles/sidebar.css"
function Sidebar(){
    return(
        <div className="sidebar">
            <h2 className="nme">RS-TECH</h2>
            <ul className="lst">
                <li>Dashboard</li>
                <li className="emp">Employee</li>
                <li>Calender</li>
                <li>Messages</li>
            </ul>

        </div>
    )
}
export default Sidebar