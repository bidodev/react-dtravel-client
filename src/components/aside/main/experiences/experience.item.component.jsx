import React, { Component } from "react";
import "./experience.item.component.styles.scss";
import { connect } from "react-redux";

import smoothScroll from "../../../intro/landing/smoothScroll";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover = () => {
    this.setState(this.toggleHoverState);
  };

  toggleHoverState = (state) => {
    return {
      isHovering: !state.isHovering,
    };
  };

  sanitize = (str) => {
    //function to sanitize country and description..
  }
  render() {
    const { id, src, productName, country } = this.props;

    return (
      <React.Fragment>
        <div
          className="card"
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
          onClick={() => {
            this.props.handleMouseClick(id);
          }}
        >
          <img
            className={id === 404 ? "img-404" : "img-card"}
            key={id}
            src={src}
            alt={productName}
          />
          {this.state.isHovering && (
            <div>
              <li>
                <h4>
                  {productName[0].toUpperCase() + productName.slice(1)}
                </h4>
              </li>
              <li>
                <ion-icon name="navigate-outline"></ion-icon>
                {country[0].toUpperCase() + country.slice(1)}
              </li>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

const mapDispachToProps = (dispatch) => {
  return {
    //not working as expected..
    handleMouseClick: (id) => console.log("User clicked on the Experience wirh id", id)
      //dispatch({ type: "UPDATE_INPUT", payload: id }),
  };
};

export default connect(null, mapDispachToProps)(Card);
