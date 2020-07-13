import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Search() {
  const dispatch = useDispatch();

  return (
    <div className="aside-search">
      <input
        type="search"
        placeholder="Search"
        onChange={() => dispatch({ type: "UPDATE_INPUT", payload: "i" })}
      />
    </div>
  );
}
export default Search;
