import React, { useState } from 'react';
import questionsFullData from "./questions.json";
import {Link} from "react-router-dom";

import "./quiz.styles.scss";

const ListItem = (props) => {
    const item = props.value;
    const id = props.id;
    const style = props.style;
    const variants = item.variants;
    const step = variants.map((variant, index) =>
        <li key={variant.toString()} className = {variant}>
          {variant}
          {/* <img src = {`./img/${item.id}/${variant}.jpg`} alt = {item.productName}/> */}
        </li>);
      return (
        <ul id ={id} className="quiz-item" style={style}>
          <h3>{item.question}</h3>
          {step}
         </ul>
      );
}
  const Quiz = () => {
   const [visible, setVisible] = useState("");
    const [opacity, setOpacity] = useState(0); 
    const makeVisible = index => {
     setVisible("visible");
      setOpacity(1); 
    }
    let currentListItem = 0;
    const forward  = () => {
      if (currentListItem === 4) {
        currentListItem = 0;
      } else {
        currentListItem++
      }
      makeVisible(currentListItem)
    }
    const back  = () => {
      if (currentListItem === 0) {
        currentListItem = 4;
      } else {
        currentListItem--
      }
      makeVisible(currentListItem)
    }
    const listItems = questionsFullData.map((elem,index) => 
      <ListItem key={elem.id.toString() + " " + index} value={elem}  id = {index + "-quiz-item"}  style = {{visibility: visible, opacity: opacity}} />
    );
    return (
      <div className="quiz-main">
            <div className = "back">
            <button className = "back" onClick={back}>  
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
        <button  className = "forward" onClick={forward}>
          <ion-icon name="chevron-forward-outline"></ion-icon>
          </button> 
          </div>
      </div>
    );
  }
  
  export default Quiz;