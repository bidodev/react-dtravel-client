import React from "react";
import { useDispatch } from "react-redux";

const QuestionItem = (props) => {
    const dispatch = useDispatch();
  
  const quizInput = React.useRef();
  
  const onSubmit = (event) => {
    event.preventDefault();
    console.warn(quizInput.current);
    dispatch({ type: "UPDATE_INPUT", payload: quizInput.current.value });
  };
    const item = props.value;
    const id = props.id;
    const name = props.name;
    const variants = item.variants;
    const step = variants.map((variant) => (
        <form id={id} className="quiz-item">
          <button type="submit" key={variant.toString()} value={variant.toString().toLowerCase()} name = {name} ref={quizInput} onSubmit={onSubmit}>
        {variant}
      </button>
      </form>
    ));
    return (
        <div>
        <h3>{item.question}</h3>
        {step}
    </div>
    );
  };

  export default QuestionItem