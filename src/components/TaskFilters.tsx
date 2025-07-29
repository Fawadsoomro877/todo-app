import React from "react";
import type { Filter } from "../types/task";

type TaskFiltersProps = {
  current: Filter;
  onChange: (filter: Filter) => void;
};

const TaskFilters: React.FC<TaskFiltersProps> = ({ current, onChange }) => (
  <div className="todo-filters">
    {(["all", "completed", "incomplete"] as Filter[]).map((f) => (
      <button
        key={f}
        onClick={() => onChange(f)}
        className={`todo-filter-btn ${current === f ? "active" : ""}`}
      >
        {f[0].toUpperCase() + f.slice(1)}
      </button>
    ))}
  </div>
);

export default TaskFilters;
