import React from "react";
import {Link}from "react-router-dom";
const Predict = () => {
    return (<><div className="predict" id="Predict"><div className="predict_header"><h2>Predict the course</h2></div>
        <div className="Predict_body">
            <div className="predict_description"> we will help you to know which technical course you can opt in your initial stage of technical learning</div>
          
            <div className="predict_button"><Link to="/Instruction"><button className="pbutton"> Predict now</button></Link></div>
        </div></div></>)
}
export default Predict;