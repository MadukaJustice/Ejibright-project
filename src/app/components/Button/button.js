import styles from "../../page.module.css";

const OrangeButton = (props) => {
  return (
    <>
      <button className={styles.orangeButton}>{props.text}</button>
    </>
  );
};

export default OrangeButton;
