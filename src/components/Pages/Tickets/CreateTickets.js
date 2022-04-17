import Button from "../../UI/Button";
import Input from "../../UI/Input";
import Modal from "../../UI/Modal";
import styles from "./CreateTickets.module.css";

const CreateTickets = (props) => {
  return (
    <Modal>
      <div>
        <form>
          <Input name="Collection name" input={{}}></Input>
        </form>
        <div className={styles.buttons}>
          <Button input={{ onClick: props.onHide }}>Close</Button>
          <Button input={{ onClick: props.onHide }}>Apply</Button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateTickets;
