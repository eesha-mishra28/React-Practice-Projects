import styles from "./Button.module.css"
const Button = () => {
  const buttonNames = ['C', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '×', '÷', '=', '.', '±', '%'];
  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((name) => (
        <button className={styles.button}>
        {name}
        </button>
      ))}
    </div>
  );
}
export default Button;
      