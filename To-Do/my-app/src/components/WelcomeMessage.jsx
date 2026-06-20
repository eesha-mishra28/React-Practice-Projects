import styles from "./WelcomeMessage.module.css";
const WelcomeMessage = () => {
    return <div className={styles.welcomeMessage}>
        <h1>Welcome to my To-Do App</h1>
        <p>Here you can add your tasks and manage them efficiently.</p>
    </div>
}
export default WelcomeMessage;