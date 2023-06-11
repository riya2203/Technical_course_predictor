import react, { useState } from "react";
import Computers from "./data/Computers";
import C_quizresult from "./C_quizresult";

const C_quiz = () => {
    const [score, setscore] = useState(0);
    const [correctclick, setcorrectclick] = useState(false);
    const [currentquestion, setcurrentquestion] = useState(0);
    const [showresult, setshowresult] = useState(false);
    const handleanswer = (iscorrect) => {
        if (iscorrect) {
            let sc = score + 1;
            setscore(sc);

        }
        setcorrectclick(true);

    }
    const handlenext = () => {
        if (currentquestion < 9) {
            const nstate = currentquestion + 1;
            setcurrentquestion(nstate);
        }
        else {
            setshowresult(true);
        }
        setcorrectclick(!correctclick);


    }
    const handleplayagain = () => {
        setcurrentquestion(0);
        setscore(0);
        setshowresult(false);
    };
    return (<div className="main_quizcontainer">{showresult ? (<C_quizresult score={score} handleplayagain={handleplayagain} />) : (<> <div className="computer_quiz">
        <div className="question_section">
            <div className="score">{score}</div>
          <div className="question_content">  <span className="question_count"><span>Question. {currentquestion + 1}:  </span></span> <div className="question">
          {Computers[currentquestion].question}</div></div>
           
        </div>
        <div className="answers">
            {Computers[currentquestion].answers.map((ans, i) => {
                return <button disabled={correctclick} className={` button ${correctclick && ans.iscorrect ? "correct" : "button"}`} key={i} onClick={() => handleanswer(ans.iscorrect)}>{ans.answertext}</button>
            })}

        </div>
        <div className="next" disabled={!correctclick} onClick={handlenext}>next</div>
    </div></>)}</div>);
}
export default C_quiz;