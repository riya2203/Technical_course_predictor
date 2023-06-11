import React from "react";
import { Link } from "react-router-dom";
const Header=()=>{
    return(<>
    <div className="header">
    <ul>
      <li>  <Link to="/" className="Link" style={{textDecoration:"none" ,color:"white" }} >Home </Link></li>
   <li><Link to="/Predict" className="Link" style={{textDecoration:"none",color:"white"}}>Predict</Link></li>
   <li><Link to="/About_us" style={{textDecoration:"none", color:"white"}}>About us</Link></li>
    </ul>
    </div>
    </>)
}
export default Header; 