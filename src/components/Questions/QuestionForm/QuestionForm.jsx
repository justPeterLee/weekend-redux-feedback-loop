import { useHistory } from "react-router-dom";
import { useRef } from "react";
function QuestionForm(props) {
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
      } else alert("invalid answer");
    } else {
      props.onFeedbackToRedux(answer.current.value);
      history.push(props.path);
    }
  };

  return (
    <div>
      <h1>{props.question}</h1>
      <div>
        <label>{props.subQuestion}</label>
        <br />
        <input ref={answer} type={props.type}></input>
      </div>
      <button onClick={nextEventHandler}>Next</button>
    </div>
  );
}

export default QuestionForm;
