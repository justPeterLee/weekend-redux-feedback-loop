import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
function Review() {
  const history = useHistory();

  const [incomplete, setIncomplete] = useState(true)
  const answers = useSelector((store) => store);

  const confirmHandler = () => {
    history.push("/");
  };

  const completeChecker = () => {
    if(answers.feedbackAnswer.feeling && answers.feedbackAnswer.understanding && answers.feedbackAnswer.support){
      setIncomplete(false)
    }else{
      setIncomplete(true)
    }

  }

  useEffect(()=>{completeChecker()}, [])

  return (
    <div>
      <div>
        <p>Feelings: {answers.feedbackAnswer.feeling}</p>
        <p>Understanding: {answers.feedbackAnswer.understanding}</p>
        <p>Support: {answers.feedbackAnswer.support}</p>
        {answers.feedbackAnswer.comments ? <p> Comment: {answers.feedbackAnswer.comments}</p> : <p>Comment: n/a</p>}
      </div>

      {!incomplete ? <button onClick={confirmHandler} > Confirm </button> : <button onClick={confirmHandler} disabled> Incomplete </button> }
    </div>
  );
}

export default Review;
