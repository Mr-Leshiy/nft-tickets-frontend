import Button from "../../UI/Button";
import Modal from "../../UI/Modal";

const CreateTickets = (props) => {
  return (
    <Modal>
      <Button input={{ onClick: props.onHide }}>Close</Button>
    </Modal>
  );
};

export default CreateTickets;
