import React from "react";
import styles from "./HeadSocials.module.scss";
import icon_linkedin from "../../../assets/images/icon-header-linkedin.svg";
import icon_inst from "../../../assets/images/icon-header-inst.svg";
import icon_telegram from "../../../assets/images/icon-header-telegram.svg";

const HeadSocials = () => {
  return (
    <ul className={styles.socials}>
      <li>
        <a href="https://github.com/">
          <img src={icon_linkedin} alt="linkedin" />
        </a>
      </li>
      <li>
        <a href="https://github.com/">
          <img src={icon_inst} alt="instagram" />
        </a>
      </li>
      <li>
        <a href="https://github.com/">
          <img src={icon_telegram} alt="telegram-" />
        </a>
      </li>
    </ul>
  );
};

export default HeadSocials;
