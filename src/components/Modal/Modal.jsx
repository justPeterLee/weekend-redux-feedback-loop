import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import "./Modal.css";
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
    <div className="start-container">
      {pageCondition ? (
        <h1 className="start-header">FeedBack Sent!</h1>
      ) : (
        <h1 className="start-header">Feedback was unable to send</h1>
      )}

      <div>
        <button onClick={newFeedback} className="start-button">
          Leave New Feedback
        </button>
      </div>
    </div>
  );
}

export default Modal;
