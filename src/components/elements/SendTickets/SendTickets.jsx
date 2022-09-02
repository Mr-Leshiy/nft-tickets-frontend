import React from "react";
import styles from "./SendTickets.module.scss";

const SendTickets = () => {
  return (
    <nav className={styles.send}>
      <form className={styles.form} action="post">
        <div className={styles.label}>0 tickets selected</div>

        <div className={styles.formWrapper}>
          <div className={styles.inputWrapper}>
            <input type="text" placeholder="Enter hash" />
          </div>

          <button type="submit">Send</button>
        </div>
      </form>
    </nav>
  );
};

export default SendTickets;
