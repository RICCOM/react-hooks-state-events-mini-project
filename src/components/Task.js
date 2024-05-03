import React from "react";

function Task({ task, onDeleteTask}) {
    function handleDelete() {
        onDeleteTask(task);
    }

    return (
        <div className="task">
            <div className="category">{task.category}</div>
            <div className="text">{task.text}</div>
            <button className="delete" onClick={handleDelete}>X</button>
        </div>
        
    );
}

export default Task;
