import React from "react";
import handleOfferSearch from "./handleOfferSearch";
import { useSelector } from 'react-redux';
import ListItem from './list-item.component'



const OffersEndList = ({input}) => {
  //grabing the data you need from the state.
  const offersFullData = useSelector(state => state.destinations);

  //obj to return for no match
  const noOfferMatch = [offersFullData.find(element => element.id.toString() === "404")];
  const offersArr = handleOfferSearch(input, noOfferMatch, offersFullData);
  const listItems = offersArr.map(({id, ...restProps}) => (
    <ListItem key={id.toString()} {...restProps}/>
  ));
  return (
    <div className="offers-list" id="offers">
      <ul className="offers-list">{listItems}</ul>
    </div>
  );
};


export default OffersEndList;
