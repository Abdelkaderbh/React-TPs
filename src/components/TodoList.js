import React, { useState } from "react";

export default function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const newTask = tasks.filter((_, i) => i !== index);
    setTasks(newTask);
  };
  return (
    <div>
      <h1>Liste des tâches</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
        placeholder="Ajouter une taches"
      />

      <button onClick={handleAddTask}> Ajouter </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteTask(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
