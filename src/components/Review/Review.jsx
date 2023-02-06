import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
function Review() {
  // creating instances
  const history = useHistory();
  const dispatch = useDispatch();



  // getting FEEDBACK ANSWERS from redux
  const feeling = useSelector((store) => store.feedbackAnswer.feeling);
  const understanding = useSelector((store) => store.feedbackAnswer.understanding);
  const support = useSelector((store) => store.feedbackAnswer.support);
  const comments = useSelector((store) => store.feedbackAnswer.comments);
  
  //const checker = useSelector((store) => store.postMade)


  // --- local state ---
  const [incomplete, setIncomplete] = useState(true); // button validation
  
  //const [dataSend, setDataSent] = useState(checker)


  // --- event handler functions ---
  
  // confirm button function
  const confirmHandler = () => {
    //history.push("/");

    const answerData = {
      feeling: feeling,
      understanding: understanding,
      support: support,
      comments: comments,
    }
    dispatch({ type: "SEND_FEEDBACK", payload: answerData });

    history.push('/feedback/modal')
  };

  // button validation checker (run on page load)
  const completeChecker = () => {
    if (feeling && understanding && support) {
      setIncomplete(false);
    } else {
      setIncomplete(true);
    }
  };



  // --- functions running (run on page load) ---
  useEffect(() => {
    completeChecker();
  },[]);

  return (
    <div>
      <div>

        <p>Feelings: {feeling}</p>
        <p>Understanding: {understanding}</p>
        <p>Support: {support}</p>
        {comments ? <p> Comment: {comments}</p> : <p>Comment: n/a</p>}
      </div>

      {!incomplete ? (
        <button onClick={confirmHandler}> Confirm </button>
      ) : (
        <button onClick={confirmHandler} disabled>
          Incomplete
        </button>
      )}
    </div>
  );
}

export default Review;
