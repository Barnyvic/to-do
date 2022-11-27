import React, { useState } from "react";
import { RiDeleteBin3Line } from "react-icons/ri";
import Checkbox from "./Checkbox";

function TaskItem({ name, done, onToggle, onTrash, OnRename }) {
  const [Edit, setEdit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(!Edit);
  };
  return (
    <div className="container">
      <div className={"TaskItem-container " + (done ? "done" : "not-done")}>
        <Checkbox done={done} onClicked={() => onToggle(!done)} />
        {!Edit ? (
          <div onClick={() => setEdit(!Edit)}>
            <p> {name}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="form-two">
            <input
              className="input-field"
              type="text"
              value={name}
              onChange={(e) => OnRename(e.target.value)}
            />
          </form>
        )}
      </div>
      <button onClick={onTrash}>
        <RiDeleteBin3Line className="icon icon-delete" />
      </button>
    </div>
  );
}

export default TaskItem;
