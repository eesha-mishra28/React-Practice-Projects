import React, { useState } from "react";
import { BiMessageAdd } from "react-icons/bi";
function AppTodo({ onnewitem }) {
  const [todoname, settodoname] = useState("");
  const [tododate, settododate] = useState("");
  const handletodoname = (event) => { settodoname(event.target.value); }
  const handletododate = (event) => { settododate(event.target.value); }
  const handleaddbuttonclicked=()=>{
    onnewitem(todoname, tododate);
    settodoname(" ");
    settododate(" ");
  }
  
  return <div><div className="container text-center">
    <div className="row kg-row">
      <div className="col-6">
        <input type="text" placeholder="Add a task" onChange={handletodoname} value={todoname} />
      </div>
      <div className="col-4">
        <input type="date" onChange={handletododate} value={tododate} />
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success kg-button"
        onClick={handleaddbuttonclicked}>
          <BiMessageAdd></BiMessageAdd>
        </button>
      </div>
    </div>
  </div>
  </div>
}
export default AppTodo; 