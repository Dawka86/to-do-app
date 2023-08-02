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
    const updatedData = individualData.map((task, i) =>
      i === index ? { ...task, isDone: true } : task 
    );
    setIndividuaData(updatedData);
  }

  function handleTaskDelete(index) {
    const updatedData = individualData.filter((task, i) => i !== index);
    setIndividuaData(updatedData);
  }
  

  return (
    <>
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
          <li key={index}>
            {task.actToDo}{" "}
            <button onClick={() => handleTaskComplete(index)}>&#10003;</button>
            <button onClick={() => handleTaskDelete(index)}>&#10006;</button>
          </li>
        ))}
      </ul>
    </>
  );
}
