import { React, useState } from "react";
import HeadSocials from "../../UI/HeadSocials/HeadSocials.jsx";
import LangSwitcher from "../../UI/LangSwitcher/LangSwitcher.jsx";
import styles from "./Header.module.scss";
import logo from "../../../assets/images/logo.svg";

import { FaBars, FaTimes } from "react-icons/fa";

import { useTranslation } from "react-i18next";
import "../../../utils/i18next";

const Header = () => {
  const [isActive, setActive] = useState(true);

  const toggleNav = () => {
    setActive(!isActive);
  };

  // Translation
  const { t } = useTranslation();

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
            <a href="https://github.com/"> {t("header.nav.home")} </a>
          </li>
          <li>
            <a href="https://github.com/">{t("header.nav.tickets")}</a>
          </li>
          <li>
            <a href="https://github.com/">{t("header.nav.info")}</a>
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
