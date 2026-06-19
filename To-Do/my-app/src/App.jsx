import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";
import Todoitem from "./components/Todoitem";
import Todoitems from "./components/Todoitems";
import "./App.css";

function App() {
  const todoitem = [
    {
      name: "buy milk",
      date: "10/12/2026",
    },
    {
      name: "buy milk",
      date: "10/12/2026",
    },
    {
      name: "buy milk",
      date: "10/12/2026",
    }
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AppTodo />
      <Todoitems todoitem={todoitem}></Todoitems>
    </center>
  );
}
export default App;
