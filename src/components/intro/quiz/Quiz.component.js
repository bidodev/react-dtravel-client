import React, { useState } from "react";
import questionsFullData from "./questions.json";
import { Link } from "react-router-dom";
import QuestionItem from "./question-item.component"

import "./quiz.styles.scss";

const Quiz = () => {
  const listItems = questionsFullData.map((elem, index) => (
    <QuestionItem
      key={elem.id.toString() + " " + index}
      value={elem}
      name = {elem.id.toString()}
      id={
        index + "-quiz-item"
      } /* style = {{visibility: visible, opacity: opacity} }*/
    />
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
      <div className="quiz-list">       
        {listItems}
      </div>
      <div className="forward">
        <button className="forward" /* onClick={handleClick} */>
          <a href="/#offers">
          <ion-icon name="chevron-forward-outline"></ion-icon>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Quiz;
