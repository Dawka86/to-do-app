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
        {individualData.map((person, index) => (
          <li key={index}>{person.actToDo}</li>
        ))}
      </ul>
    </>
  );
}
