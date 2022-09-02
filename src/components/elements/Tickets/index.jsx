import React from "react";
import Ticket from "./Ticket.jsx";
import styles from "./Tickets.module.scss";

const Tickets = () => {
  return (
    <section>
      <div className={styles.grid}>
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
      </div>
    </section>
  );
};

export default Tickets;
