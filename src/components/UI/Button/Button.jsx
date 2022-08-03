import React from "react";
import styles from "./Button.module.scss";

const button = (props) => {
  let className = styles[props.classes];
  let image = "";
  if (props.image) {
    image = <img src={props.image} alt="icon" />;
  }

  return (
    <button className={className}>
      {props.children} {image}
    </button>
  );
};

export default button;
