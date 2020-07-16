import React, { useRef }  from "react";
import { useDispatch } from "react-redux";
import Btn from "./btn.component"

const inputObj = {  }
const QuestionItem = ({id, question, variants}) => {
  const quizInput = useRef();
  console.log(quizInput)
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    const e = event.target;
    inputObj[e.name] = e.value;
    console.warn(inputObj);
    const quizInput = Object.values(inputObj)
    console.warn(quizInput);
    dispatch({ type: "UPDATE_INPUT", payload: quizInput});
  };
  const btns = variants.map((variant, index) => (
    <Btn
    key = {index}
    name = {id}
    variant = {variant}
    onSubmit = {onSubmit}
  />
    ));
    return (
        <div id={id}>
        <h3>{question}</h3>
        {btns}
    </div>
    );
  };

  export default QuestionItem;