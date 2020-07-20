import React from "react";
import "./custom-button.styles.scss";

function CustomButton({children, ...restProps}) {
  return <button className="custom-button" {...restProps}>{children}</button>;
}

export default CustomButton;
