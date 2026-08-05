import { useState } from "react";
import Show from "./Show.jsx"; 
const App = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>{
      nums.map((value) => (
        <Show num={value} />
      ))}
    </>
  );
}
export default App;