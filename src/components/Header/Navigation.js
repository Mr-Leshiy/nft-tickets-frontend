import Button from "./Button";
import styles from "./Navigation.module.css";

const Navigation = (props) => {
  const ticketsHandler = (event) => {
    props.onChangePage("tickets");
  };
  const aboutUsHandler = (event) => {
    props.onChangePage("about_us");
  };

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Button text="Tickets" onClick={ticketsHandler} />
        </li>
        <li>
          <Button text="About us" onClick={aboutUsHandler} />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
