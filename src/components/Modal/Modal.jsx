import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
function Modal() {
  const history = useHistory();

  const dispatch = useDispatch();

  const pageCondition = useSelector((store) => store.postMade);

  const newFeedback = () => {
    if (pageCondition) {
      dispatch({ type: "CLEAR" });
      dispatch({ type: "RESET" });
      history.push("/");
    } else {
      history.push("/");
      window.location.reload(true);
    }
  };
  return (
    <div>
      {pageCondition ? (
        <h1>FeedBack Sent!</h1>
      ) : (
        <h1>Feedback was unable to send</h1>
      )}

      <button onClick={newFeedback}>Leave New Feedback</button>
    </div>
  );
}

export default Modal;
