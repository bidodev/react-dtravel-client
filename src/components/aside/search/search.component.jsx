import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Search() {
  console.log("reRender()");
  const dispatch = useDispatch();

  const textInput = React.useRef();

  const submitValues = (event) => {
    event.preventDefault();
    dispatch({ type: "UPDATE_INPUT", payload: textInput.current.value })
  }

  return (
    <div className="aside-search">
      <form onSubmit={submitValues}>
        <input
          type="search"
          placeholder="Search"
          ref={textInput}
        />
      </form>
    </div>
  );
}
export default Search;
