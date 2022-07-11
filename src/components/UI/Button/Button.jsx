import React from "react";
import styles from "./Button.module.scss";

const button = (props) => {
  let className = styles[props.classes];

  return (
    <button className={className}>
      {props.children} <img src={props.image} />
    </button>
  );
};

export default button;
