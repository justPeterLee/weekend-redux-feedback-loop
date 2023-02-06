import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import styles from "./Review.module.css";
function Review() {
  let load = 0;
  // creating instances
  const history = useHistory();
  const dispatch = useDispatch();

  // getting FEEDBACK ANSWERS from redux
  const feeling = useSelector((store) => store.feedbackAnswer.feeling);
  const understanding = useSelector(
    (store) => store.feedbackAnswer.understanding
  );
  const support = useSelector((store) => store.feedbackAnswer.support);
  const comments = useSelector((store) => store.feedbackAnswer.comments);

  const checker = useSelector((store) => store.postMade);

  // --- local state ---
  const [incomplete, setIncomplete] = useState(true); // button validation

  const [sendCondition, setSendCondition] = useState(true);

  // --- event handler functions ---

  // confirm button function
  const confirmHandler = () => {
    //history.push("/");

    const answerData = {
      feeling: feeling,
      understanding: understanding,
      support: support,
      comments: comments,
    };
    dispatch({ type: "SEND_FEEDBACK", payload: answerData });
    load += 1
    
  };

  // button validation checker (run on page load)
  const completeChecker = () => {
    if (feeling && understanding && support) {
      setIncomplete(false);
    } else {
      setIncomplete(true);
    }
  };

  // hard reset redux
  const remakeFeedback = () => {
    history.push("/");
    window.location.reload(true);
  };

  // --- functions running (run on page load) ---
  useEffect(() => {
    completeChecker();
    load += 1
  }, []);

  useEffect(() => {
    if(load !== 1){
      if (checker) {
        history.push("/feedback/modal");
      } else {
        setSendCondition(false);
      }
    }
    
  }, [checker]);


  
  return (
    <div className={styles.container}>
      <div>
        <p>Feelings: {feeling}</p>
        <p>Understanding: {understanding}</p>
        <p>Support: {support}</p>
        {comments ? <p> Comment: {comments}</p> : <p>Comment: n/a</p>}
      </div>

      {!incomplete ? (
        <div>
          <button onClick={confirmHandler} className={styles.buttonConfirm}>
            {" "}
            Confirm{" "}
          </button>
        </div>
      ) : (
        <div>
          <button onClick={confirmHandler} className={styles.buttonIncomplete} disabled>
            {" "}
            Incomplete{" "}
          </button>
        </div>
      )}

      {!sendCondition && (
        <div className={styles.modalContainer}>
          <div className={styles.modalContent}>
            <h1>Failed to send feedback</h1>
            <button className={styles.buttonModal} onClick={remakeFeedback}>
              {" "}
              remake feedback{" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Review;
