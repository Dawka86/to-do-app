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
  const handleTaskComplete = index => {
    const newActToDo = [...individualData];
    newActToDo[index].completed = !newActToDo[index].completed;
    setIndividuaData(newActToDo);
  
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
          Zadania do wykonania:{" "}
          <input value={actToDo} onChange={handleChangeToDo}></input>
          <button className="btn">Dodaj</button>
        </label>
      </form>
      <h2>Zapisane zadania:</h2>
      <ul>
        {individualData.map((task, index) => (
          <li className="listTask" key={index} style={{textDecoration: task.completed? "line-through" : "none"}}>
            {task.actToDo}{" "}
            <button className="btnChose btnApprove" onClick={() => handleTaskComplete(index)}>{task.completed?  "\uDC4D":"\u2713"}</button>
            <button className="btnChose btnDelete" onClick={() => handleTaskDelete(index)}>&#10006;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
