import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import "./Modal.css";

function Modal() {

  // declared instances
  const history = useHistory();
  const dispatch = useDispatch();

  // to see if the post request to the data base was successful or not
  const pageCondition = useSelector((store) => store.postMade);

  // on button click
  // clear redux / create a new feedback
  // if POST req failed a hard page reload will be made
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
      {/* conditionally render page content, to see if POST was made to database */}
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
