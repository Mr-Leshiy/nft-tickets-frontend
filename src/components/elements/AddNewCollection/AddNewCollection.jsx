import React from "react";
import styles from "./AddNewCollection.module.scss";
import Title from "../../UI/Title/Title.jsx";

const AddNewCollection = () => {
  return (
    <section className={styles.section}>
      <Title classes="title_brown">Add new collection</Title>
    </section>
  );
};

export default AddNewCollection;
