import React, { useState } from "react";
import Title from "../../UI/Title/Title.jsx";
import styles from "./Slider.module.scss";
// import BtnSlider from './BtnSlider
import dataSlider from "./dataSlider";

const Slider = () => {
  return (
    <section className={styles.slider__section}>
      <Title classes="title_brown">How to install?</Title>

      <div className={styles.slider__container}>
        {dataSlider.map((obj, index) => {
          return (
            <div className={styles.slider__slide}>
              <div className={styles.slider__slide_image}>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    `/slider/slider-image-${index + 1}.svg`
                  }
                />
              </div>

              <div className={styles.slider__slide_info}>
                <h3 className={styles.slider__slide_title}>Step 1</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Slider;
