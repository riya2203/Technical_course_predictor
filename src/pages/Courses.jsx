import React from "react";
import axios from "axios";
import {useState,useEffect} from "react";
import Course from "../subcomponent/Course";
const Courses=()=>{
    const [contents, setcontents]=useState([]);
    useEffect(()=>{
        const fetchAllContents=async()=>{
            try
            {
                const res=await axios.get("http://localhost:8800/courses");
             setcontents(res.data);
            }
            catch(err)
            {
                    console.log(err+"occured from useeffect of courses");
            }
        }
        fetchAllContents();
    },[])
    return(<>
        <div className="courses">
            <div className="course_header">List of trending technical courses with free resouces is given below</div>
            <div className="course_container">
                {contents.map( (element,key=element.id)=><Course  key={ element.id} {...element}/>)}
            </div>
        </div>
    </>)

}
export default Courses;