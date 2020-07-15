import React from "react";
import { useDispatch } from "react-redux";

const QuestionItem = (props) => {
    const dispatch = useDispatch();
  
  const quizInput = React.useRef();
  
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(quizInput.current.value);
    dispatch({ type: "UPDATE_INPUT", payload: quizInput.current.value });
  };
    const item = props.value;
    const id = props.id;
    const name = props.name;
    const variants = item.variants;
    const step = variants.map((variant) => (
      <div>
          <button type="submit">
        <label className = "radio-label">
        <input type="radio" key={variant.toString()} value={variant.toString().toLowerCase()} name = {name} ref={quizInput}/>
        {variant}
      </label>
      </button>
      </div>
    ));
    return (
      <form id={id} className="quiz-item" onSubmit={onSubmit}>
        <h3>{item.question}</h3>
        {step}
        <div>
    </div>
      </form>
    );
  };

  export default QuestionItem