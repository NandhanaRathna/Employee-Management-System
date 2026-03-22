import "../styles/header.css"

function Header(){
    return(
        <div className="header">
            {/* <div className="isec"><span className="icon">⚙</span><span className="icon">🔔</span></div> */}
            <input type="text" placeholder="Search" />
            <button className="abtn">+ Add New Employee</button>

        </div>
    )
}
export default Header