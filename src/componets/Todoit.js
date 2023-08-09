import { useState } from "react";
import { Header } from "./MyHeader";
import Modal from "./Modal";

export function Todoit() {
  const [individualData, setIndividuaData] = useState([]);
  const [actToDo, setActToDo] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [taskToDeleteIndex, setTaskToDeleteIndex] = useState(null);

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
  const handleCloseModal = () => {
    setTaskToDeleteIndex(null);
    setOpenModal(false);
  };
  const handleTaskComplete = (index) => {
    const newActToDo = [...individualData];
    newActToDo[index].completed = !newActToDo[index].completed;
    setIndividuaData(newActToDo);
  };
  const handleConfirmDelete = () => {
    const updatedData = individualData.filter((task, i) => i !== taskToDeleteIndex);
    setIndividuaData(updatedData);
    setTaskToDeleteIndex(null);
    setOpenModal(false);
  };

  return (
    <div className="maineContent">
      <Header />
      <form onSubmit={handleSummit}>
        <label>
        To do tasks:{" "}
          <input value={actToDo} onChange={handleChangeToDo}></input>
          <button className="btn">Add</button>
        </label>
      </form>
      <h2>Saved tasks:</h2>
      <ul>
        {individualData.map((task, index) => (
          <li
            className="listTask"
            key={index}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.actToDo}{" "}
            <button
              className="btnChose btnApprove"
              onClick={() => handleTaskComplete(index)}
            >
              {task.completed ? "\uDC4D" : "\u2713"}
            </button>
            <button
              className="btnChose btnDelete"
              onClick={() => {
                setTaskToDeleteIndex(index); 
                setOpenModal(true);
              }}
            >
              &#10006;
            </button>
          </li>
        ))}
      </ul>
      {openModal && (
        <div className="modalBackdrop">
          <Modal closeModal={handleCloseModal} handleConfirmDelete={handleConfirmDelete} />
        </div>
      )}
    </div>
  );
}