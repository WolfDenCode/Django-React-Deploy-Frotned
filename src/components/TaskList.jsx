import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/tasks/")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <div className="task-list">
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            {task.title} - {task.completed ? "Completed" : "Incomplete"}
            <Link to={`/edit/${task.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
      <Link to="/create" className="create-task">
        Create Task
      </Link>
    </div>
  );
};

export default TaskList;
