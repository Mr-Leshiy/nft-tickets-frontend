import React from "react";
import Title from "../../UI/Title/Title.jsx";
import styles from "./InfoTickets.module.scss";

import info_tickets_image from "../../../assets/images/info-tickets-image.svg";
import icon_1 from "../../../assets/images/icon-about-1.svg";
import icon_2 from "../../../assets/images/icon-about-2.svg";
import icon_3 from "../../../assets/images/icon-about-3.svg";
import icon_4 from "../../../assets/images/icon-about-4.svg";

const InfoTickets = () => {
  return (
    <section className={styles.wrapper}>
      <Title classes="title_brown">Info about tickets</Title>
      <div className={styles.info}>
        <div className={styles.column}>
          <div className={styles.item}>
            <div className={styles.imgWrapper}>
              <img src={icon_1} alt="img-1" />
            </div>
            <p className={styles.text}>
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>

          <div className={styles.item}>
            <div className={styles.imgWrapper}>
              <img src={icon_2} alt="img-2" />
            </div>
            <p className={styles.text}>
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
        </div>

        <div className={styles.columnMiddle}>
          <div className={styles.item}>
            <img src={info_tickets_image} alt="info" />
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.item}>
            <div className={styles.imgWrapper}>
              <img src={icon_3} alt="img-3" />
            </div>
            <p className={styles.text}>
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>

          <div className={styles.item}>
            <div className={styles.imgWrapper}>
              <img src={icon_4} alt="img-4" />
            </div>
            <p className={styles.text}>
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoTickets;
