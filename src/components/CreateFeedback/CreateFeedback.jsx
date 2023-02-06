import { useHistory } from "react-router-dom";


function CreateFeedback() {

  const history = useHistory();

  // move user to questions for feed back (feeling page)
  const nextPageHandler = () => {
    history.push("/feedback/feeling");
  };

  
  return (
    <div className="start-container">
      <h1>Create a feedback</h1>
      <div>
        <button onClick={nextPageHandler} className="start-button"> Create </button>
      </div>
    </div>
  );
}

export default CreateFeedback;
