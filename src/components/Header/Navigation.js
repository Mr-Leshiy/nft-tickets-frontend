import Button from "./Button";
import styles from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Button text="Create Tickets" />
        </li>
        <li>
          <Button text="Send Tickets" />
        </li>
        <li>
          <Button text="Tickets Wallet" />
        </li>
        <li>
          <Button text="About us" />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
