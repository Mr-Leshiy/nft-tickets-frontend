import React from "react";
import Button from "../../UI/Button/Button.jsx";
import styles from "./Main.module.scss";

import IOS from "../../../assets/images/icon-ios.svg";
import google from "../../../assets/images/icon-google.svg";
import background from "../../../assets/images/background-main.svg";

const Main = () => {
  return (
    <section className={styles.main}>
      <div className={styles.main__image}>
        {/* <img src={background} alt="background" /> */}
      </div>
      <div className={styles.main__content}>
        <h1 className={styles.main__title}>
          Any large text <br />
          about <span>anything</span>
        </h1>
        <p className={styles.main__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className={styles.main__buttons}>
          <Button classes="button" image={google}>
            Download for
          </Button>
          <Button classes="button" image={IOS}>
            Download for
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Main;
