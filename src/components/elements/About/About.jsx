import React from "react";
import Title from "../../UI/Title/Title.jsx";

import styles from "./About.module.scss";
import title_styles from "../../UI/Title/Title.module.scss";

import icon_1 from "../../../assets/images/icon-about-1.svg";
import icon_2 from "../../../assets/images/icon-about-2.svg";
import icon_3 from "../../../assets/images/icon-about-3.svg";
import icon_4 from "../../../assets/images/icon-about-4.svg";

import image_1 from "../../../assets/images/image-about-1.jpg";
import image_2 from "../../../assets/images/image-about-2.jpg";
import image_3 from "../../../assets/images/image-about-3.jpg";
import image_4 from "../../../assets/images/image-about-4.jpg";

const About = () => {
  return (
    <section className={styles.about}>
      <Title classes="title_brown">About Us</Title>

      <div className={styles.about__container}>
        <div className={styles.about__item}>
          <div className={styles.about__top}>
            <div className={styles.about__image_wrapper}>
              <img src={image_1} alt="tickets" />
            </div>
          </div>
          <div className={styles.about__bottom}>
            <div className={styles.about__info}>
              <div className={styles.about__info_top}>
                <div className={styles.about__info_title_wrapper}>
                  <img src={icon_1} alt="tickets" />
                  <h3 className={styles.about__info_title}>
                    Lorem ipsum dolor sit amet.
                  </h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.about__item}>
          <div className={styles.about__top}>
            <div className={styles.about__info}>
              <div className={styles.about__info_top}>
                <div className={styles.about__info_title_wrapper}>
                  <img src={icon_2} alt="QR" />
                  <h3 className={styles.about__info_title}>
                    Lorem ipsum dolor sit amet.
                  </h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.about__bottom}>
            <div className={styles.about__image_wrapper}>
              <img src={image_2} alt="QR" />
            </div>
          </div>
        </div>

        <div className={styles.about__item}>
          <div className={styles.about__top}>
            <div className={styles.about__image_wrapper}>
              <img src={image_3} alt="NFT" />
            </div>
          </div>
          <div className={styles.about__bottom}>
            <div className={styles.about__info}>
              <div className={styles.about__info_top}>
                <div className={styles.about__info_title_wrapper}>
                  <img src={icon_3} alt="NFT" />
                  <h3 className={styles.about__info_title}>
                    Lorem ipsum dolor sit amet.
                  </h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.about__item}>
          <div className={styles.about__top}>
            <div className={styles.about__info}>
              <div className={styles.about__info_top}>
                <div className={styles.about__info_title_wrapper}>
                  <img src={icon_4} alt="Lock" />
                  <h3 className={styles.about__info_title}>
                    Lorem ipsum dolor sit amet.
                  </h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.about__bottom}>
            <div className={styles.about__image_wrapper}>
              <img src={image_4} alt="Lock" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
