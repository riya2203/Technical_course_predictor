import React from "react"
import { Link } from "react-router-dom";
let ascore=0;
const A_quizresult=(props)=>{
    ascore=props.score;

    return(<div className="quizresult">
    <div className="aquizresult"><h1> score: {props.score}</h1>
    <Link to="/C_quiz"><button>Go to computer quiz</button></Link>
    </div>
    </div>)
}
export default A_quizresult;
export {ascore};