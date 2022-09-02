import { React, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { TicketsPage } from "../../../pages/TicketsPage";
import { FrontPage } from "../../../pages/FrontPage";

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
    <div>
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
              <Link to="/nft-tickets-frontend"> {t("header.nav.home")} </Link>
            </li>
            <li>
              <Link to="/tickets">{t("header.nav.tickets")}</Link>
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

      <Routes>
        <Route path="/nft-tickets-frontend" element={<FrontPage />}></Route>
        <Route path="/tickets" element={<TicketsPage />}></Route>
      </Routes>
    </div>
  );
};

export default Header;
