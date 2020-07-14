import React, { useState } from "react";
import questionsFullData from "./questions.json";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "./quiz.styles.scss";

const ListItem = (props) => {
  const dispatch = useDispatch();

const radioInput = React.useRef();

const onSubmit = (event) => {
  event.preventDefault();
  dispatch({ type: "UPDATE_INPUT", payload: radioInput.current.value });
};
  const item = props.value;
  const id = props.id;
  const name = props.name;
  const variants = item.variants;
  const step = variants.map((variant, index) => (
    <div>
    <input type="radio" key={variant.toString()} value={variant.toString().toLowerCase()} name = {name} />
      <label>
      {variant}
    </label>
    </div>
  ));
  return (
    <form id={id} className="quiz-item" onSubmit={onSubmit}>
      <h3>{item.question}</h3>
      {step}
      <div>
    <button type="submit">Submit</button>
  </div>
    </form>
  );
};
const Quiz = () => {
  const listItems = questionsFullData.map((elem, index) => (
    <ListItem
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
