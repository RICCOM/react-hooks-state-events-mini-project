import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskDetails, setTaskDetails] = useState({ text: "", category: categories[0] });

  function handleChange(event) {
    const { name, value } = event.target;
    setTaskDetails({ ...taskDetails, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit(taskDetails);
    setTaskDetails({ text: "", category: categories[0] });
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={taskDetails.text} onChange={handleChange} />
      </label>
      <label>
        Category
        <select name="category" value={taskDetails.category} onChange={handleChange}>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

