import React from "react";
import styles from "./Title.module.scss";

const Title = (props) => {
  let className = styles[props.classes];
  return (
    <div className={styles.title_wrapper}>
      <h2 className={className}>{props.children}</h2>
    </div>
  );
};

export default Title;
