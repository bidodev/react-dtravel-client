import React, { Component } from "react";
import "./experience.item.component.styles.scss";

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
  render() {
    const { id, src, productName, country } = this.props;

    return (
      <React.Fragment>
        <div
          className="card"
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
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
