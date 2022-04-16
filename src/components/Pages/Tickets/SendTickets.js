import Button from "../../UI/Button";
import Modal from "../../UI/Modal";

const SendTickets = (props) => {
  return (
    <Modal>
      <Button input={{ onClick: props.onHide }}>Close</Button>
    </Modal>
  );
};

export default SendTickets;
