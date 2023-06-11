import React from "react";
import {useState} from "react";
import {useEffect} from "react";
import axios from "axios";
const Final_prediction=()=>{
    const [contents, setcontents]=useState("");
 
    useEffect(()=>{
        const fetchAllContents=async()=>{
            try
            {
                const res=await axios.get("http://localhost:8800/course");
             setcontents(res.data);
            }
            catch(err)
            {
                    console.log(err+"occured from useeffect of courses");
            }
        }
        fetchAllContents();
    },[])
  
    return (<>
       
        <div className="quizresult">{contents}
        You can check the list of free resource from the course tab</div>
    </>);
}
export default Final_prediction;