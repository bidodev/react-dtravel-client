import React, { useRef }  from "react";
import questionsFullData from "./questions.json";
import { Link } from "react-router-dom";
import QuestionItem from "./question-item.component"

import "./quiz.styles.scss";

const Quiz = () => {
  const listItems = questionsFullData.map(({...props}, index) => (
    <QuestionItem
      id={
        index
      }
      {...props}
    />
    ));
    const quizInput = useRef();
    const test = () => {
console.log(quizInput.current)
    }
  return (
    <div className="quiz-main">
      <div className="back">
      <Link to="/">
        <button className="back">
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        </Link>
      </div>
      <div className="quiz-list" ref={quizInput} onClick={test}>       
        {listItems}
      </div>
      <div className="forward">
        <button className="forward" /* onClick={forward} */>
          {/* <a href="/#offers"> */}
          <ion-icon name="chevron-forward-outline"></ion-icon>
          {/* </a> */}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
