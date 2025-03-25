import { useState } from "react";
import { FaTrash, FaCheck, FaEdit, FaSave } from "react-icons/fa";
import "./TaskItem.css";

const TaskItem = ({ task, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [updatedDescription, setUpdatedDescription] = useState(task.description || "");

  const handleSave = () => {
    if (!updatedTitle.trim()) return;
    onUpdate(task._id, { title: updatedTitle, description: updatedDescription });
    setIsEditing(false);
  };

  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <div className="edit-mode">
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <input
            type="text"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
          <button className="save-btn" onClick={handleSave}>
            <FaSave /> Save
          </button>
        </div>
      ) : (
        <>
          <div className="task-info">
            <strong>{task.title}</strong>
            <p>{task.description}</p>
          </div>
          <div className="task-actions">
            <button className="edit-btn" onClick={() => setIsEditing(true)}>
              <FaEdit /> Edit
            </button>
            <button className="complete-btn" onClick={() => onUpdate(task._id, { completed: !task.completed })}>
              <FaCheck /> Complete
            </button>
            <button className="delete-btn" onClick={() => onDelete(task._id)}>
              <FaTrash /> Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TaskItem;
