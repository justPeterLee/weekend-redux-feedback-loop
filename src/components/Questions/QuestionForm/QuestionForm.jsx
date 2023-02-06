import { useHistory } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";
import style from "./QuestionForm.module.css";
function QuestionForm(props) {
  const [inputStyle, setInputStyle]= useState({});
  const [validationStatement, setValidationStatement]= useState(false);
  const [lableStyle, setLableStyle]= useState({color: 'black'});

  // declare an instance of history (to change page)
  const history = useHistory();

  const answer = useRef();

  // function for next button
  const nextEventHandler = () => {
    let feedAns = answer.current.value;

    // validation check
    if (props.type !== "text") {
      if (feedAns && feedAns >= 1 && feedAns <= 5) {
        props.onFeedbackToRedux(answer.current.value);

        // change page on button click
        history.push(props.path);
      } else{
        setInputStyle({borderBottom: "2px solid red", color:"red"})
        setValidationStatement(true)
        setLableStyle({color:"red"})
      };

    } else {
      props.onFeedbackToRedux(answer.current.value);
      history.push(props.path);
    }
  };

  return (
    <div className={style.container}>
      <h1 className={style.header}>{props.question}</h1>

      <div className={style.responseElement}>
        <div className={style.inputElement}>
          <label className={style.questionLabel} style={lableStyle}>{props.subQuestion}</label>
          <br />
          <input
            ref={answer}
            type={props.type}
            className={style.inputForm}
            onChange={()=>{setInputStyle({}); setValidationStatement(false)}}
            onFocus={()=>{setLableStyle({color:'blue'});setInputStyle({}); setValidationStatement(false)}}
            onBlur={()=>{setLableStyle({color:'black'});setInputStyle({}); setValidationStatement(false)}}

            style={inputStyle}
          ></input>

          {validationStatement && (<p className={style.invalidText}>* invalid answer</p>)}
        </div>

        <div>
          <button onClick={nextEventHandler} className={style.inputQuestion}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default QuestionForm;
