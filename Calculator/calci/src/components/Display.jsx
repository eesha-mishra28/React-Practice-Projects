import styles from "./Display.module.css"
const Display = (props) => {
    return (
        <input className={styles.display} type="text" value={props.displayvalue} readOnly></input>
    )
};
export default Display;