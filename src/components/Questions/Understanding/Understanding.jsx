import QuestionForm from "../QuestionForm/QuestionForm";
import { useDispatch, useSelector } from "react-redux";

function Understanding() {
    const dispatch = useDispatch();

    const curAnswer = useSelector(store => store.feedbackAnswer)
    const dispatchToRedux = (answer) => {
        dispatch({type:"ADD_UNDERSTAND", payload: answer})
    }

    return(
        <QuestionForm 
        path={'/feedback/support'}
        question={'How are you understanding the content? (1-5)'}
        subQuestion={'Understanding?'}
        type={'number'}

        onFeedbackToRedux={dispatchToRedux}
        />
    )
}

export default Understanding;
