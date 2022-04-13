import styles from "./Header.module.css";
import Navigation from "./Navigation";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <h1>NFT Tickets</h1>
      <Navigation />
    </header>
  );
};

export default Header;
