import QuestionForm from "../QuestionForm/QuestionForm";
import { useDispatch } from "react-redux";
function Feeling(){
    const dispatch = useDispatch();

    const dispatchToRedux = (answer) => {
        dispatch({type:"ADD_FEELING", payload: answer})
    }
    return(
        <QuestionForm 
        path={'/feedback/understand'}
        question={'How are you feeling today? (1-5)'}
        subQuestion={'Feeling?'}
        type={'number'}

        onFeedbackToRedux={dispatchToRedux}
        />
    )
}

export default Feeling;
