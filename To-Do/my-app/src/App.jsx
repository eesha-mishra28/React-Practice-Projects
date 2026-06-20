import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";
import Todoitem from "./components/Todoitem";
import Todoitems from "./components/Todoitems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {

  const [todoitems, setTodoitems] = useState([]);
  const handlenewitem = (itemName, itemDueDate) => {
    console.log("new item added", itemName, itemDueDate);
    const newTodoitem = [...todoitems, { name: itemName, date: itemDueDate }];
    setTodoitems(newTodoitem);
  }
  const handleDeleteitem = (itemToDelete) => {
    const newTodoItems = todoitems.filter((item) => item.name !== itemToDelete);
    setTodoitems(newTodoItems);
  }

  return (
    <center className="todo-container">
      <AppName />
      <AppTodo onnewitem={handlenewitem} />
      {todoitems.length === 0 && <WelcomeMessage />}
      <Todoitems todoitem={todoitems} ondelete={handleDeleteitem}></Todoitems>
    </center>
  );
}
export default App;
