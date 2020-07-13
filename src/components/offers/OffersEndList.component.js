import React from "react";
import handleOfferSearch from "./handleOfferSearch";
import { useSelector } from 'react-redux';
import ListItem from './list-item.component'

//obj to return for no match
const noOfferMatch = [{
  id: 404,
  description: "Try one more time",
  photo: "../public/img/404.jpg",
  country: "Neverland",
}];

const OffersEndList = ({input}) => {
  //grabing the data you need from the state.
  const offersFullData = useSelector(state => state.destinations)

  const offersArr = handleOfferSearch(input, noOfferMatch, offersFullData);
  const listItems = offersArr.map((elem) => (
    <ListItem key={elem.id.toString()} value={elem} />
  ));
  return (
    <div className="offers">
      <ul className="offers-list">{listItems}</ul>
    </div>
  );
};


export default OffersEndList;
