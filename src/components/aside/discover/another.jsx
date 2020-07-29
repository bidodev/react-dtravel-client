import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class DemoCarousel extends Component {
  getConfigurableProps = {
    showArrows: true,
    showStatus: false,
    showIndicators: false,
    infiniteLoop: true,
    showThumbs: true,
    useKeyboardArrows: true,
    autoPlay: true,
    stopOnHover: true,
    swipeable: false,
    dynamicHeight: false,
    emulateTouch: true,
    thumbWidth: 50,
    selectedItem: 0,
    interval: 60000,
    transitionTime: 400,
    swipeScrollTolerance: 5,
  };

  render() {
    return (
      <Carousel {...this.getConfigurableProps}>
        {this.props.data.map((item) => {
          return (
            <div onClick={() => this.props.openModal(item)}>
              <img
                key={item.id}
                src={`./img/${item.type}/${item.cover.url}`}
                alt={item.cover.description}
              />
              <div className="legend">{item.productName}</div>
            </div>
          );
        })}
      </Carousel>
    );
  }
}

export default DemoCarousel;
