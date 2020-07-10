import React from 'react';
import offersFullData from "../../data.json";
import handleOfferSearch from "./handleOfferSearch"

//obj to return for no match
const noOfferMatch = {
  "id": 404,
  "description": "Try one more time",
  "photo": "../public/img/404.jpg",
  "country": "Neverland"
}

const ListItem = (props) => {
  const item = props.value;
  console.log(item)
    return (
      <div className="offers-item">
        <h3>{item.productName}</h3>
        <img src = {item.src} alt = {item.productName}/>
    <p>{item.description}</p>
    <p>Continent: {item.continent}</p>
    <p>Prices: {item.prices}</p>
    </div>
    );
  }

const OfferEndList = (props) => {
  const input = props.input;
  const offersArr = handleOfferSearch(input, noOfferMatch, offersFullData);
  const listItems = offersArr.map(elem =>
    <ListItem key={elem.toString()} value={elem} />
  );
  return (
    <div className="offers">
    <ul className="offers-list">
      {listItems}
    </ul>
    </div>
  );
}

export default OfferEndList;