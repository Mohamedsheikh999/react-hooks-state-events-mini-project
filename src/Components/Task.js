import React from "react";
import Task from "./Task"; // Ensure that the Task component exists and is correctly implemented in './Task'

function TaskList({ tasks, onDelete }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.text}
          text={task.text}
          category={task.category}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;
