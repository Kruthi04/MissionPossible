import React, { useState } from "react";

const TaskForm = ({ onSubmit, existingTask }) => {
  const [title, setTitle] = useState(existingTask ? existingTask.title : "");
  const [description, setDescription] = useState(existingTask ? existingTask.description : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{existingTask ? "Edit Task" : "Add Task"}</h2>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <button type="submit">{existingTask ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
