import React from "react";

type TaskInputProps = {
  text: string;
  setText: (text: string) => void;
  handleSubmit: () => void;
  isEditing: boolean;
};

const TaskInput: React.FC<TaskInputProps> = ({
  text,
  setText,
  handleSubmit,
  isEditing,
}) => (
  <div className="todo-input-group">
    <input
      className="todo-input"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Enter your task"
    />
    <button className="todo-button" onClick={handleSubmit}>
      {isEditing ? "Update" : "Add"}
    </button>
  </div>
);

export default TaskInput;
