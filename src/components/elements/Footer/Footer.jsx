import Button from "../../UI/Button/Button";
import FooterSocials from "../../UI/FooterSocials/FooterSocials";
import React from "react";
import styles from "./Footer.module.scss";

import i18next from "i18next";

const languages = [
  {
    code: "ua",
    name: "UA",
    country_code: "ua",
  },

  {
    code: "en",
    name: "EN",
    country_code: "gb",
  },

  {
    code: "ru",
    name: "RU",
    country_code: "ru",
  },
];

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
            {languages.map(({ code, name, country_code }) => {
              return (
                <li key={country_code}>
                  <button onClick={() => i18next.changeLanguage(code)}>
                    {name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
