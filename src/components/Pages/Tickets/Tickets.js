import Page from "../../UI/Page";
import Button from "../../UI/Button";
import styles from "./Tickets.module.css";

const Tickets = (props) => {
  return (
    <Page>
      <h1>Tickets</h1>
      <div className={styles.bar}>
        <Button>Create Tickets</Button>
        <Button>Send Tickets</Button>
      </div>
    </Page>
  );
};

export default Tickets;
