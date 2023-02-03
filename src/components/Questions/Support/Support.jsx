import QuestionForm from "../QuestionForm/QuestionForm";
import { useDispatch } from "react-redux";
function Support(){
    const dispatch = useDispatch();

    const dispatchToRedux = (answer) => {
        dispatch({type:"ADD_SUPPORT", payload: answer})
    }

    return(
        <QuestionForm 
        path={'/feedback/comments'}
        question={'How well are you being supported? (1-5)'}
        subQuestion={'Support?'}
        type={'number'}

        onFeedbackToRedux={dispatchToRedux}
        />
    )
}

export default Support;
