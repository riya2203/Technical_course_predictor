import React from "react";
const Course=(props)=>{
    return(<>
     <div className="course">
        <div className="coursename">Course:{props.coursename}</div>
        <div className="skill">Skill:{props.skill.toLowerCase()}</div>
        <div className="freeresources">Freeresources:{props.freeresource.toLowerCase()}</div>
     </div>
    </>)
  
}
export default Course;