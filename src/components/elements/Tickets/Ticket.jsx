import React from "react";
import styles from "./Tickets.module.scss";

import ticket_image from "../../../assets/images/image-ticket.jpg";
import icon_time from "../../../assets/images/icon-ticket-time.svg";
import icon_id from "../../../assets/images/icon-ticket-id.svg";

const Ticket = () => {
  return (
    <div className={styles.ticket}>
      <div className={styles.image}>
        <img src={ticket_image} alt="img" />
      </div>

      <div className={styles.body}>
        <div className={styles.row}>
          <div className={styles.head}>
            <h5 className={styles.title}>Elite A1pe Billionaire Community</h5>
            <div className={styles.id}>
              <img src={icon_id} alt="#" />
              <span>28181228</span>
            </div>
          </div>

          <div className={styles.time}>
            <img src={icon_time} alt="o" />
            <span>26.09.2022</span>
          </div>
        </div>

        <div className={styles.number}>1</div>

        <div className={styles.bottom}>
          <button className={styles.button}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
