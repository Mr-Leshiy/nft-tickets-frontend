import { React, useState } from "react";
import HeadSocials from "../../UI/HeadSocials/HeadSocials.jsx";
import LangSwitcher from "../../UI/LangSwitcher/LangSwitcher.jsx";
import styles from "./Header.module.scss";
import logo from "../../../assets/images/logo.svg";

import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isActive, setActive] = useState(true);

  const toggleNav = () => {
    setActive(!isActive);
  };

  return (
    <header className={styles.header}>
      <a href="/" className={styles.header__logo}>
        <img src={logo} alt="T-uty" />
      </a>

      <nav
        className={
          isActive
            ? `${styles.header__nav}`
            : `${styles.header__nav_responsive}`
        }
      >
        <ul>
          <li>
            <a href="https://github.com/">Home</a>
          </li>
          <li>
            <a href="https://github.com/">Tickets</a>
          </li>
          <li>
            <a href="https://github.com/">Info</a>
          </li>

          <button className={styles.header__btn_close} onClick={toggleNav}>
            <FaTimes />
          </button>
        </ul>
      </nav>

      <div className={styles.header__sidebar}>
        <LangSwitcher></LangSwitcher>
        <HeadSocials></HeadSocials>
      </div>

      <button className={styles.header__btn} onClick={toggleNav}>
        <FaBars />
      </button>
    </header>
  );
};

export default Header;
