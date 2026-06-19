import styles from"./App.module.css"
import Display from "./components/Display";
import Button from "./components/Button";
function App() {
  return (
    <div className={styles.calculator}>
      <Display></Display>
      <Button></Button>
    </div>
  );
}
export default App;