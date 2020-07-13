import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Search() {
  const dispatch = useDispatch();

  const textInput = React.useRef();

  return (
    <div className="aside-search">
      <input
        type="search"
        placeholder="Search"  ref={textInput}
        onChange={() => dispatch({ type: "UPDATE_INPUT", payload: textInput.current.value })}
      />
    </div>
  );
}
export default Search;
