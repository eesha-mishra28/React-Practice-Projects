import styles from"./App.module.css"
import Display from "./components/Display";
import Button from "./components/Button";
import { useState } from "react";
function App() {
  let [calval, setCalval] = useState("");
  const onClickButton = (buttonText) => {
    if (buttonText == 'C') {
      setCalval("");
    }
    else if (buttonText == '=') {
      const result = eval(calval);
      setCalval(result);
    } else {
      setCalval(calval + buttonText);
    }
  }

  return (
    <div className={styles.calculator}>
      <Display displayvalue={calval}></Display>
      <Button onButtonClick={onClickButton}></Button>
    </div>
  );
}
export default App;