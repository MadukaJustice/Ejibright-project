import styles from "../../page.module.css";

const OrangeButton = (props) => {
  return (
    <>
      <div>
        <button className={styles.orangeButton}>{props.text}</button>
      </div>
    </>
  );
};

export default OrangeButton;
