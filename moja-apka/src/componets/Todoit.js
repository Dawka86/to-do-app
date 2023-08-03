import { useState } from "react";

export function Todoit() {
  const [individualData, setIndividuaData] = useState([]);
  const [actToDo, setActToDo] = useState("");

  function handleChangeToDo(e) {
    setActToDo(e.target.value);
  }
  function handleSummit(e) {
    e.preventDefault();
    if (actToDo) {
      const newAct = {
        actToDo: actToDo,
      };
      setIndividuaData([...individualData, newAct]);
      setActToDo("");
    }
  }
  function handleTaskComplete(index) {
    if (index >= 0 && index < individualData.length) {
      const updatedData = [...individualData];
      updatedData[index].isDone = true;
      setIndividuaData(updatedData);
  }
  }
  function handleTaskDelete(index) {
    const updatedData = individualData.filter((task, i) => i !== index);
    setIndividuaData(updatedData);
  }
  

  return (
    <div className="maineContent">
      <h1>Lista rzeczy do zrobienia:</h1>
      <form onSubmit={handleSummit}>
        <label>
          Rzeczy ktore planujesz wykonac:{" "}
          <input value={actToDo} onChange={handleChangeToDo}></input>
          <button className="btn">Dodaj</button>
        </label>
      </form>
      <h2>Zapisane zadania:</h2>
      <ul>
        {individualData.map((task, index) => (
          <li className="listTask"  key={index}>
            {task.actToDo}{" "}
            <button className="btnChose btnApprove" onClick={() => handleTaskComplete(index)}>&#10003;</button>
            <button className="btnChose btnDelete" onClick={() => handleTaskDelete(index)}>&#10006;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
