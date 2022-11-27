import { useEffect, useState } from "react";
import TaskItem from "./components/TaskItem";
import Tasks from "./components/Tasks";

function App() {
  // state for tasks
  const [Task, setTask] = useState([]);
  // state for searchBar
  const [inputText, setInputText] = useState("");

  const addTasks = (name) => {
    setTask([...Task, { name: name, done: false }]);
  };

  // //  useeffect for storing tasks in localStorage
  // useEffect(() => {
  //   if (Task.length === 0) return;
  //   localStorage.setItem("tasks", JSON.stringify(Task));
  // }, [Task]);

  // useEffect(() => {
  //   const taskItems = JSON.parse(localStorage.getItem("tasks"));
  //   setTask(taskItems);
  // }, []);

  // function to delete the tasks
  function removeTask(taskIndex) {
    const deletedTask = Task.filter((task, index) => index !== taskIndex);
    return setTask(deletedTask);
  }

  // function to update the tasks property done
  const updateTaskDone = (taskIndex, newDone) => {
    const newTasks = [...Task];
    newTasks[taskIndex].done = newDone;
    setTask(newTasks);
  };

  // function to update the tasks
  const updateTask = (index, newName) => {
    const newTasks = [...Task];
    newTasks[index].name = newName;
    setTask(newTasks);
  };

  // function for search
  const inputHandler = (e) => {
    //convert input text to lower case
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const activeTasks = Task.filter((t) => t.done).length;
  const totalTasks = Task.length;

  //create a new array by filtering the original array
  const filteredData = Task.filter((task) => {
    //if no input the return the original
    if (inputText === "") {
      return task;
    }
    //return the item which contains the user input
    else {
      return task.name.toLowerCase().includes(inputText);
    }
  });

  return (
    <div className="App">
      <div className="search">
        <h3>
          {activeTasks} out of {totalTasks} completed
        </h3>
        <input
          type="text"
          onChange={inputHandler}
          placeholder="Seach tasks"
          className="searchBar"
        />
      </div>
      <Tasks onAdd={addTasks} />
      {filteredData.map((task, index) => (
        <TaskItem
          key={index}
          onToggle={(done) => updateTaskDone(index, done)}
          OnRename={(newName) => updateTask(index, newName)}
          onTrash={() => removeTask(index)}
          {...task}
        />
      ))}
    </div>
  );
}

export default App;
