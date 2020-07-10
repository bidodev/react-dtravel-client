import React from 'react';

const ListItem = (props) => {
    return <li>{props.value}</li>;
  }

export const OfferEndList = (props = props.offersArr) => {
    const offersArr = props;
    const listItems = offersArr.forEach(elem =>
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