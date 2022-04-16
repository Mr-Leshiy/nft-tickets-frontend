import Page from "../../UI/Page";
import Button from "../../UI/Button";
import styles from "./Tickets.module.css";
import { useState } from "react";
import CreateTickets from "./CreateTickets";
import SendTickets from "./SendTickets";

const Tickets = (props) => {
  const [createTicketsIsShown, setCreateTicketsIsShown] = useState(false);
  const [sendTicketsIsShown, setSendTicketsIsShown] = useState(false);

  const showCreateTicketsHandler = () => {
    setCreateTicketsIsShown(true);
  };

  const hideCreateTicketsHandler = () => {
    console.log("hide create");
    setCreateTicketsIsShown(false);
  };

  const showSendTicketsHandler = () => {
    setSendTicketsIsShown(true);
  };

  const hideSendTicketsHandler = () => {
    console.log("hide send");

    setSendTicketsIsShown(false);
  };

  return (
    <Page>
      <h1>Tickets</h1>
      <div className={styles.bar}>
        <Button input={{ onClick: showCreateTicketsHandler }}>
          Create Tickets
        </Button>
        <Button input={{ onClick: showSendTicketsHandler }}>
          Send Tickets
        </Button>
      </div>
      {createTicketsIsShown && (
        <CreateTickets onHide={hideCreateTicketsHandler} />
      )}
      {sendTicketsIsShown && <SendTickets onHide={hideSendTicketsHandler} />}
    </Page>
  );
};

export default Tickets;
