import React from "react";
import styles from "./LangSwitcher.module.scss";
import icon_ukraine from "../../../assets/images/icon-ukraine.svg";

const LangSwitcher = () => {
  return (
    <div>
      <img className={styles.icon} src={icon_ukraine} alt="ukraine" />
    </div>
  );
};

export default LangSwitcher;
