import React from "react";
import HeadSocials from "../../UI/HeadSocials/HeadSocials.jsx";
import LangSwitcher from "../../UI/LangSwitcher/LangSwitcher.jsx";
import styles from "./Header.module.scss";
import logo from "../../../assets/images/logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.header__logo}>
        <img src={logo} alt="T-uty" />
      </a>

      <ul className={styles.header__nav}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Tickets</a>
        </li>
        <li>
          <a href="#">Info</a>
        </li>
      </ul>

      <div className={styles.header__sidebar}>
        <LangSwitcher></LangSwitcher>
        <HeadSocials></HeadSocials>
      </div>
    </header>
  );
};

export default Header;
