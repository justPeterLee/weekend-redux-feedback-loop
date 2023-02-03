import { useHistory } from "react-router-dom";
import { useRef } from "react";
function QuestionForm(props){
    
    // declare an instance of history (to change page)
    const history = useHistory();

    const answer = useRef()

    // function for next button
    const nextEventHandler = () => {
        // change page on button click
        history.push(props.path)
        
        props.onFeedbackToRedux(answer.current.value)

    }


    return(
        <div>
            <h1>{props.question}</h1>
            <div>
                <label>{props.subQuestion}</label><br/>
                <input ref={answer} type={props.type}></input>
            </div>
            <button onClick={nextEventHandler}>Next</button>
        </div>
    )
}

export default QuestionForm;