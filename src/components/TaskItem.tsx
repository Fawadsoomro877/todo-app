import React from "react";
import { useDispatch } from "react-redux";
import type { Task } from "../types/task";
import { toggleComplete, deleteTask } from "../lib/features/task/taskSlice";
import type { AppDispatch } from "../lib/store";

type TaskItemProps = {
  task: Task;
  onEdit: (task: Task) => void;
};

const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <li className="task-item">
      <div className="task-left">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => dispatch(toggleComplete(task.id))}
          className="task-checkbox"
        />
        <span className={`task-text ${task.completed ? "completed" : ""}`}>
          {task.text}
        </span>
      </div>
      <div className="task-actions">
        <button className="edit-btn" onClick={() => onEdit(task)}>
          Edit
        </button>
        <button
          className="delete-btn"
          onClick={() => dispatch(deleteTask(task.id))}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
