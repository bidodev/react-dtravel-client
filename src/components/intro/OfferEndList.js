import React from 'react';
import offersData from "../../data.json";

const ListItem = (props) => {
    return <li>{props.value}</li>;
  }

export const OfferEndList = (props = offersData) => {
    const offersArr = props.offersArr;
    const listItems = offersArr.forEach(elem =>
    <ListItem key={elem.toString()} value={elem} />
  );
  return (
    <ul className="offers-list">
      {listItems}
    </ul>
  );
}