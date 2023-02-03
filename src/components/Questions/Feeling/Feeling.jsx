import QuestionForm from "../QuestionForm/QuestionForm";
function Feeling(){
    return(
        <QuestionForm 
        path={'/feedback/understand'}
        question={'How are you feeling today? (1-5)'}
        subQuestion={'Feeling?'}
        type={'number'}
        />
    )
}

export default Feeling;
