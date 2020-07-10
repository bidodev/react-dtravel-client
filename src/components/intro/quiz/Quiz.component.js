import React from 'react';
import questionsFullData from "./questions.json";
import {Link} from "react-router-dom";


const ListItem = (props) => {
    const item = props.value;
    const variants = item.variants;
    const step = variants.map(variant =>
        <li key={variant.toString()} className = {variant}>
          {variant}
          <img src = {`./img/${item.id}/${variant}.jpg`} alt = {item.productName}/>
        </li>);
      return (
        <div className="quiz-item">
          <h3>{item.question}</h3>
          {step}
         </div>
      );
}
  const Quiz = () => {
    const listItems = questionsFullData.map(elem =>
      <ListItem key={elem.id.toString()} value={elem} />
    );
    return (
      <div className="quiz-main">
          <Link to="/">
            <h1>Home</h1>
            </Link>
            <ul className="quiz-list">
        {listItems}
        </ul>
      </div>
    );
  }
  
  export default Quiz;