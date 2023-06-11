import react, { useState } from "react";

import A_quizresult from "./A_quizresult";
import Aptitudes from "./data/Aptitudes";

const C_quiz = () => { 
    const [score, setscore] = useState(0);
    const [correctclick, setcorrectclick] = useState(false);
    const [currentquestion, setcurrentquestion] = useState(0);
    const [showresult, setshowresult] = useState(false);
    const handleanswer = (iscorrect,i) => {
        if (iscorrect) {
            let sc = score + 1; 
            setscore(sc);
           
        }
       
        setcorrectclick(true);

    }
    const handlenext = () => {
        if(correctclick==true)
        {
        if (currentquestion < 9) {
            const nstate = currentquestion + 1;
            setcurrentquestion(nstate);
        }
        else {
            setshowresult(true);
        }
        setcorrectclick(false);
    }
       

    }
    const handleplayagain = () => {
        setcurrentquestion(0);
        setscore(0);
        setshowresult(false);
    };
    return (<div className="main_quizcontainer">{showresult ? (<A_quizresult score={score} handleplayagain={handleplayagain} />) : (<> <div className="computer_quiz">
        <div className="question_section">
            <div className="score">{score}</div>
          <div className="question_content">  <span className="question_count"><span>Question. {currentquestion + 1}:  </span></span> <div className="question">
          {Aptitudes[currentquestion].question}</div></div>
           
        </div>
        <div className="answers">
            {Aptitudes[currentquestion].answers.map((ans, i) => {
                return <button disabled={correctclick}  id ={i} className={` button ${correctclick && ans.iscorrect===true ? "correct": "button"}`} key={i} onClick={() => handleanswer(ans.iscorrect)}>{ans.answertext}</button>
            })}

        </div>
        <div className="next" disabled={!correctclick} onClick={handlenext}>next</div>
    </div></>)}</div>);
}
export default C_quiz;