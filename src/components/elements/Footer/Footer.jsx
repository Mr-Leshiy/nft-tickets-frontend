import Button from "../../UI/Button/Button";
import FooterSocials from "../../UI/FooterSocials/FooterSocials";
import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__main}>
        <div className={styles.footer__main_wrapper}>
          <Button classes="button_yellow-transparent">sobakakoshka@com</Button>

          <ul className={styles.footer__nav}>
            <li>
              <a href="https://github.com/">Home</a>
            </li>
            <li>
              <a href="https://github.com/">Tickets</a>
            </li>
            <li>
              <a href="https://github.com/">Info</a>
            </li>
          </ul>

          <FooterSocials></FooterSocials>
        </div>
      </div>

      <div className={styles.footer__bottom}>
        <div className={styles.footer__bottom_wrapper}>
          <span className={styles.footer__copywrite}>
            ©2022 All rights reserved
          </span>

          <ul className={styles.footer__languages}>
            <li>
              <a href="https://github.com/">EN</a>
            </li>
            <li>
              <a href="https://github.com/">RU</a>
            </li>
            <li>
              <a href="https://github.com/">UA</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
