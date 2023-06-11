import React from "react";
import {Link} from "react-router-dom";
const Instruction=()=>{
    return(<>
    <div className="instruction">
        For predicting a perfect course for starting your technical journey you have to go through two test submit your information 
       <div className="test">
       <div>Aptitude</div> 
        <div>Computer</div>
       </div>
     <Link to="/A_quiz"> <button>Start Aptitude test</button></Link> 
     
       </div>
    </>)
}
export default Instruction;