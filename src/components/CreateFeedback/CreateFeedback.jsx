import { useHistory } from "react-router-dom";
function CreateFeedback() {
    const history = useHistory();

    const nextPageHandler = () => {
     history.push('/feedback/feeling')   
    }
  return (
    <>
      <h1>submit a feedback</h1>
      <button onClick={nextPageHandler}> Create </button>
    </>
  );
}

export default CreateFeedback;
