import React from "react";
import styles from "./LangSwitcher.module.scss";

import i18next from "i18next";
import CSSModules from "react-css-modules";

import icon_ukraine from "../../../assets/images/icon-ukraine.svg";
import icon_uk from "../../../assets/images/icon-uk.svg";
import icon_ru from "../../../assets/images/icon-ru.svg";
import icon_arrow from "../../../assets/images/icon-arrow-down.svg";

const languages = [
  {
    code: "ua",
    name: "ua",
    country_code: "ua",
    country_flag: icon_ukraine,
  },

  {
    code: "en",
    name: "en",
    country_code: "gb",
    country_flag: icon_uk,
  },

  {
    code: "ru",
    name: "ru",
    country_code: "ru",
    country_flag: icon_ru,
  },
];

const LangSwitcher = () => {
  return (
    <>
      <ul className={styles.lswitcher}>
        <li className={styles.lswitcher__main}>
          {languages.map(({ code, country_flag }) => {
            if (code === i18next.resolvedLanguage) {
              return (
                <img
                  className={styles.lswitcher__icon}
                  src={country_flag}
                  alt={code}
                />
              );
            } else {
              return null;
            }
          })}

          <img className={styles.icon} src={icon_arrow} alt=">" />

          <ul>
            {languages.map(({ code, name, country_code, country_flag }) => (
              <li key={country_code}>
                <button onClick={() => i18next.changeLanguage(code)}>
                  <img src={country_flag} alt={code} />
                  <span>{name}</span>
                </button>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
};

export default CSSModules(LangSwitcher, styles, {
  allowMultiple: true,
});
