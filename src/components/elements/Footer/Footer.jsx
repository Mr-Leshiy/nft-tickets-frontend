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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Tickets</a>
            </li>
            <li>
              <a href="#">Info</a>
            </li>
          </ul>

          <FooterSocials></FooterSocials>
        </div>
      </div>

      <div className={styles.footer__bottom}>
        <div className={styles.footer__bottom_wrapper}>
          <span className={styles.footer__copywrite}>
            ©2022 Все права защищены
          </span>

          <ul className={styles.footer__languages}>
            <li>
              <a href="#">EN</a>
            </li>
            <li>
              <a href="#">RU</a>
            </li>
            <li>
              <a href="#">UA</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
