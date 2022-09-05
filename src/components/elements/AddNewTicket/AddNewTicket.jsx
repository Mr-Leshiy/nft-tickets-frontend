import React from "react";
import styles from "./AddNewTicket.module.scss";
import Title from "../../UI/Title/Title.jsx";

const AddNewTicket = () => {
  return (
    <section className={styles.section}>
      <Title classes="title">Add new Tickets</Title>
    </section>
  );
};

export default AddNewTicket;
