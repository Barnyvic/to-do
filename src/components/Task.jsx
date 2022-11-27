import React, { useState } from "react";
import { MdAdd } from "react-icons/md";

function Task({ onAdd }) {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(taskName);
    setTaskName("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button>
          <MdAdd className="icon" />
        </button>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Create a new  Task"
        />
      </form>
    </div>
  );
}

export default Task;
