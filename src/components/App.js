import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  
  function handleDeleteTask(taskToDelete) {
    setTasks(tasks.filter(task => task.text !== taskToDelete.text));
  }

  const filteredTasks = tasks.filter(task =>
    selectedCategory === "All" || task.category === selectedCategory
  );

  
  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <NewTaskForm
        categories={CATEGORIES.filter(category => category !== "All")}
        onTaskFormSubmit={handleAddTask}
      />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
