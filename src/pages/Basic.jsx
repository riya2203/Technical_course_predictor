import React, { useContext, useState } from "react";
import { cscore } from "./C_quizresult";
import { ascore } from "./A_quizresult";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Basic = () => {

const navigate= useNavigate();


    const handlesubmit =(e) => {
        e.preventDefault();
      
        console.log("handlesubmt");
        const name = document.getElementById("Name").value;
        const email = document.getElementById("email").value;
        const marks_10 = document.getElementById("marks10").value;
        const marks_12 = document.getElementById("marks12").value;
        const marks_aptitude = document.getElementById("Aptitude").value;
        const marks_computer = document.getElementById("Computer").value;
        console.log(name, email, marks_10, marks_12, marks_aptitude, marks_computer);
  const    user={name, email, marks_10,marks_12, marks_aptitude, marks_computer,occupation:""};
       

        
            console.log(user)
             axios.post("http://localhost:8800/register",user).then(res=>{console.log(res)});navigate("/Final_prediction");
        
    }
    const [marks_aptitude, set_marks_aptitude] = useState(ascore);
    const [marks_computer, set_marks_computer] = useState(cscore);
    return (<div className="basic">
    
    <div className="basic_container">
        <div className="basic_head"><h1>Basic Information</h1></div>
        
            <form className="Maininformation" id="myForm">
                <div className="fcontent">
                    <label for="Name">Name</label>
                    <input type="text" id="Name" name="name"  placeholder="enter your name" /></div>
                <div className="fcontent">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="enter your mail" />
                </div>
                <div className="fcontent">
                    <label for="marks10">
                        10th marks
                    </label>
                    <input type="number" id="marks10"  name="marks_10" placeholder="enter your 10th percent" /></div>
                <div className="fcontent">
                    <label for="marks12">
                        12th marks
                    </label><input type="number" id="marks12"  name="marks_12" placeholder="enter your 12th percent" /></div>

                <div className="fcontent"><label for="Aptitude">Aptitude </label>
                    <input type="number"  disabled={true} placeholder={marks_aptitude} value={marks_aptitude} id="Aptitude" ></input></div>


                <div className="fcontent">
                    <label for="Computer">Computer </label>
                    <input type="number" disabled={true} placeholder={marks_computer} value={marks_computer} id="Computer" />
                </div>

            </form>
            <button className="fsubmit" onClick={handlesubmit}>Submit</button>

        
    </div></div>);
}
export default Basic;