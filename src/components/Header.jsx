import "../styles/header.css"
import {FaCog,FaBell}from "react-icons/fa"

function Header({openForm,showForm}){
    return(
        
        <div className="header">

           
            {!showForm &&(
                <>
                <input type="text" placeholder="Search" />
            <button className="abtn"  onClick={() => {
    console.log("clicked")
    openForm()
  }}>+ Add New Employee</button>

                </>
            )}
          
            

        </div>
    )
}
export default Header