import QuestionForm from "../QuestionForm/QuestionForm";

function Support(){

    return(
        <QuestionForm 
        path={'/feedback/comments'}
        question={'How well are you being supported? (1-5)'}
        subQuestion={'Support?'}
        type={'number'}
        />
    )
}

export default Support;
