import QuestionForm from "../QuestionForm/QuestionForm";
import { useDispatch } from "react-redux";

function Understanding() {
    const dispatch = useDispatch();

    const dispatchToRedux = (answer) => {
        dispatch({type:"ADD_UNDERSTAND", payload: answer})
    }

    return(
        <QuestionForm 
        path={'/feedback/support'}
        question={'How are you the content? (1-5)'}
        subQuestion={'Understanding?'}
        type={'number'}

        onFeedbackToRedux={dispatchToRedux}
        />
    )
}

export default Understanding;
