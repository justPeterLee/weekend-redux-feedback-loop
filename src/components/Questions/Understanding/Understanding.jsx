import QuestionForm from "../QuestionForm/QuestionForm";
function Understanding() {
    return(
        <QuestionForm 
        path={'/feedback/support'}
        question={'How are you the content? (1-5)'}
        subQuestion={'Understanding?'}
        type={'number'}
        />
    )
}

export default Understanding;
