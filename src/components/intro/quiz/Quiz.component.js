import React, { useState, createRef } from "react";
import questionsFullData from "./questions.json";
import { Link } from "react-router-dom";
import QuestionItem from "./question-item.component";

import "./quiz.styles.scss";

const Quiz = () => {
  const refCollection = {};
  let currentFocus = 0;
  const visible = "visible";
  const opacity = 1;
  const setVisible = (index) => {
    refCollection[index].style = `visibility: ${visible}; opacity: ${opacity}` 
  }
  const setInvisible = (index) => {
    refCollection[index].style = "" 
  }
  const forward = () => {
    setInvisible(currentFocus);
    if (currentFocus < 3) {
      currentFocus++ } else {
        currentFocus = 0;
      }
      setVisible(currentFocus);
  }
  const back = () => {
    setInvisible(currentFocus);
    if (currentFocus > 0) {
      currentFocus-- } else {
        currentFocus = 3;
      }
      setVisible(currentFocus);
  }
  const listItems = questionsFullData.map(({ ...props }, index) => (
    <QuestionItem key={index} ref={(currentRef) => { refCollection[index] = currentRef; }} id={index} {...props} style = {!index ?
      {visibility: visible, opacity: opacity} : null
    } />
  ));
  return (
    <div className="quiz-main">
      <div className="back">
          <button className="back" onClick={back}>
            <ion-icon name="chevron-back-outline"></ion-icon>
          </button>
      </div>
      <div className="quiz-list">{listItems}</div>
      <div className="forward">
        <button className="forward" onClick={forward}>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default Quiz;
