import React, { useRef } from "react";
import questionsFullData from "./questions.json";
import { Link } from "react-router-dom";
import QuestionItem from "./question-item.component";

import "./quiz.styles.scss";

const Quiz = () => {
  const clickRef = React.createRef();
  const test = () => {
    console.log(clickRef.current.value);
  };
  const listItems = questionsFullData.map(({ ...props }, index) => (
    <QuestionItem key={index} ref={clickRef} id={index} {...props} />
  ));
  return (
    <div className="quiz-main">
      <div className="back">
        <Link to="/">
          <button className="back">
            <ion-icon name="chevron-back-outline"></ion-icon>
          </button>
        </Link>
      </div>
      <div className="quiz-list">{listItems}</div>
      <div className="forward">
        <button className="forward" onClick={test}>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default Quiz;
