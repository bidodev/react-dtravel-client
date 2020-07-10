import React from 'react';
import offersData from "../../data.json";

const ListItem = (props) => {
    return <li>{props.value}</li>;
  }

export const OfferEndList = (props = offersData) => {
    const offersArr = props.offersArr;
    const listItems = offersArr.forEach((number) =>
    <ListItem key={elem.toString()} value={elem} />
  );
  return (
    <div className="offers-list">
    <ul>
      {listItems}
    </ul>
    </div>
  );
}