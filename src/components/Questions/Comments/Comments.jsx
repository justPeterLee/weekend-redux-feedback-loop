import QuestionForm from "../QuestionForm/QuestionForm";
function Comments(){
    return(
        <QuestionForm 
        path={'/feedback/review'}
        question={'Any comments you want to leave?'}
        subQuestion={'Comments'}
        type={'text'}
        />
    )
}

export default Comments;