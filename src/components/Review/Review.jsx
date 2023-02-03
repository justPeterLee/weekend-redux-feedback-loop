import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
function Review() {
    const history = useHistory();

  const answers = useSelector((store) => store);
  const comment = useSelector((store) => store.feedbackAnswer.comments);

  const confirmHandler = () => {
    history.push('/')
  }
  return (
    <div>
      <div>
        <p>Feelings: {answers.feedbackAnswer.feeling}</p>
        <p>Understanding: {answers.feedbackAnswer.understanding}</p>
        <p>Support: {answers.feedbackAnswer.support}</p>
        {comment ? <p> Comment: {comment}</p> : <p>Comment: n/a</p>}
      </div>
      
      <button onClick={confirmHandler}> Confirm </button>
    </div>
  );
}

export default Review;
