import React from "react";
import { useDispatch } from "react-redux";
import "./search.component.styles.scss";

function Search() {
  const dispatch = useDispatch();

  const textInput = React.useRef();

  const submitValues = (event) => {
    event.preventDefault();
    dispatch({ type: "UPDATE_INPUT", payload: textInput.current.value });
  };

  return (
    <div className="aside-search">
      <span>
        <ion-icon name="search-outline"></ion-icon>
      </span>
      <form onSubmit={submitValues}>
        <input type="search" placeholder="Search" ref={textInput} />
      </form>
    </div>
  );
}
export default Search;
