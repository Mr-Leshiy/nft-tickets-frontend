import React from "react";
import Button from "../../UI/Button/Button.jsx";
import styles from "./Main.module.scss";

import IOS from "../../../assets/images/icon-ios.svg";
import google from "../../../assets/images/icon-google.svg";

import { useTranslation } from "react-i18next";
import "../../../utils/i18next";

const Main = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.main}>
      <div className={styles.main__image}></div>
      <div className={styles.main__content}>
        <h1 className={styles.main__title}>
          {t("main.title.main")}
          <span> {t("main.title.span")}</span>
        </h1>
        <p className={styles.main__text}>{t("main.description")}</p>

        <div className={styles.main__buttons}>
          <Button classes="button" image={google}>
            {t("button.download")}
          </Button>
          <Button classes="button" image={IOS}>
            {t("button.download")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Main;
