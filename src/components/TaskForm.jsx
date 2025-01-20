import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const TaskForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8000/api/tasks/${id}/`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setCompleted(data.completed);
        });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const method = id ? "PUT" : "POST";
    const url = id
      ? `http://localhost:8000/api/tasks/${id}/`
      : "http://localhost:8000/api/tasks/";

    fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, completed }),
    }).then(() => navigate("/"));
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Completed</label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default TaskForm;
