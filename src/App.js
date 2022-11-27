import { useEffect, useState } from "react";
import TaskItem from "./components/TaskItem";
import Tasks from "./components/Tasks";

function App() {
  // state for tasks
  const [Task, setTask] = useState([]);
  const addTasks = (name) => {
    setTask([...Task, { name: name, done: false }]);
  };

  // function to delete the tasks
  function removeTask(taskIndex) {
    const deletedTask = Task.filter((task, index) => index !== taskIndex);
    return setTask(deletedTask);
  }

  return (
    <div className="App">
      <Tasks onAdd={addTasks} />
      {Task.map((task, index) => (
        <TaskItem key={index} onTrash={() => removeTask(index)} {...task} />
      ))}
    </div>
  );
}

export default App;
