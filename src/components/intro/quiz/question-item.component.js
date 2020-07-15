import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import Btn from "./btn.component"

const QuestionItem = ({id, question, variants}) => {
  console.log("QuestionItem rendered")
  const dispatch = useDispatch();
  const inputObj = {  }
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