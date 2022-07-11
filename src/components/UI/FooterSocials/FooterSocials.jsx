import React from "react";
import styles from "./FooterSocials.module.scss";
import icon_linkedin from "../../../assets/images/icon-footer-linkedin.svg";
import icon_inst from "../../../assets/images/icon-footer-inst.svg";
import icon_telegram from "../../../assets/images/icon-footer-telegram.svg";

const HeadSocials = () => {
  return (
    <ul className={styles.socials}>
      <li>
        <a href="#">
          <img src={icon_linkedin} alt="linkedin" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={icon_inst} alt="linkedin" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={icon_telegram} alt="linkedin" />
        </a>
      </li>
    </ul>
  );
};

export default HeadSocials;
