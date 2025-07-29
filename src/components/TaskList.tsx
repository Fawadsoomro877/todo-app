import React from "react";
import type { Task } from "../types/task";
import TaskItem from "./TaskItem";

type TaskListProps = {
  tasks: Task[];
  onEdit: (task: Task) => void;
};

const TaskList: React.FC<TaskListProps> = ({ tasks, onEdit }) => (
  <ul className="task-list">
    {tasks.map((task) => (
      <TaskItem key={task.id} task={task} onEdit={onEdit} />
    ))}
  </ul>
);

export default TaskList;
