import QuestionForm from "../QuestionForm/QuestionForm";
import { useDispatch } from "react-redux";

function Comments(){
    const dispatch = useDispatch();

    const dispatchToRedux = (answer) => {
        dispatch({type:"ADD_COMMENT", payload: answer})
    }
    return(
        <QuestionForm 
        path={'/feedback/review'}
        question={'Any comments you want to leave?'}
        subQuestion={'Comments'}
        type={'text'}

        onFeedbackToRedux={dispatchToRedux}
        />
    )
}

export default Comments;