import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
function QuestionForm(props){
    
    const history = useHistory();

    const nextEventHandler = () => {
        history.push(props.path)
    }
    return(
        <div>
            <h1>{props.question}</h1>
            <div>
                <label>{props.subQuestion}</label><br/>
                <input type={props.type}></input>
            </div>
            <button onClick={nextEventHandler}>Next</button>
        </div>
    )
}

export default QuestionForm;