import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import TaskFilters from "./components/TaskFilters";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import {
  addTask,
  editTask,
  setFilter,
  toggleComplete,
} from "./lib/features/task/taskSlice";
import type { AppDispatch, RootState } from "./lib/store";
import type { Task } from "./types/task";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { tasks, filter } = useSelector((state: RootState) => state.tasks);

  const [text, setText] = useState("");
  const [editId, setEditId] = useState<string | null>(null);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  const handleSubmit = () => {
    if (!text.trim()) return;
    if (editId) {
      dispatch(editTask({ id: editId, text }));
      setEditId(null);
    } else {
      const newTask: Task = { id: uuidv4(), text, completed: false };
      dispatch(addTask(newTask));
    }
    setText("");
  };

  return (
    <div className="app-container">
      <div className="todo-box">
        <h1 className="todo-title">To-Do App</h1>
        <TaskInput
          text={text}
          setText={setText}
          handleSubmit={handleSubmit}
          isEditing={!!editId}
        />
        <TaskFilters
          current={filter}
          onChange={(f) => dispatch(setFilter(f))}
        />
        <TaskList
          tasks={filteredTasks}
          onEdit={(task) => {
            setText(task.text);
            setEditId(task.id);
          }}
        />
      </div>
    </div>
  );
};
export default App;
