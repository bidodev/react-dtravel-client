import React, { useState } from 'react';
import questionsFullData from "./questions.json";
import {Link} from "react-router-dom";

import "./quiz.styles.scss";

const ListItem = (props) => {
    const item = props.value;
    const id = props.id;
    const variants = item.variants;
    const step = variants.map((variant, index) =>
        <li key={variant.toString()} className = {variant}>
          {variant}
          {/* <img src = {`./img/${item.id}/${variant}.jpg`} alt = {item.productName}/> */}
        </li>);
      return (
        <ul id ={id} className="quiz-item">
          <h3>{item.question}</h3>
          {step}
         </ul>
      );
}
  const Quiz = () => {
    const listItems = questionsFullData.map((elem,index) => 
      <ListItem key={elem.id.toString() + " " + index} value={elem}  id = {index + "quiz-item"} />
    );
    const handleClick = () => {

    }
    return (
      <div className="quiz-main">
            <div className = "back">
            <button className = "back">  
          <ion-icon name="chevron-back-outline"></ion-icon>
          </button>
          </div>
          <div className = "quiz-list">
          <Link to="/">
            <h1>Home</h1>
            </Link>
        {listItems}
        </div>
        <div className = "forward">
        <button  className = "forward">
          <ion-icon name="chevron-forward-outline"></ion-icon>
          </button> 
          </div>
      </div>
    );
  }
  
  export default Quiz;