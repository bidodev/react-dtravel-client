import React, { Component } from "react";
import "./experience.item.component.styles.scss";

class Card extends Component {
  constructor(props) {
    super(props);

    //this component is statefull, but only this component care about the this state,
    //therefore we don't need to make component drilling.
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
  render() {
    const { id, src, productName, description, country } = this.props;

    return (
      <React.Fragment>
        <div
          className="card"
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
          {/* <h5 className="title">
            {productName.toUpperCase()}</h5> */}
          <img key={id} src={src} alt={productName} />
          {this.state.isHovering && (
            <div>
              <li><h4>{productName.charAt(0).toUpperCase() + productName.slice(1)}</h4></li>
              <li>{country.charAt(0).toUpperCase() + country.slice(1)}</li>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}
export default Card;
