import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={styles.input_style}>
      <div>
        <label>{props.name}</label>
      </div>
      <input className={styles.input} {...props.input}></input>
    </div>
  );
};

export default Input;
