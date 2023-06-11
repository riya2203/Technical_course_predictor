
import {Link } from "react-router-dom";
import { useState } from "react";

let cscore=0;
const C_quizresult=(props)=>{
    let c=props.score;
   
    cscore=c;
    
  
 const getc=()=>{return c}
    return(
      
        <div className="quizresult">
       <div className="aquizresult"><h2>score:</h2>
        {props.score}
        <button className="" onClick={props.handleplayagain}>try again</button>
       <Link to="/Basic"><button>submit your basic info</button></Link> 
      </div>
        </div>
    )

}  

export default C_quizresult;
export {cscore};
