import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css";

const TaskList = ({ tasks, onUpdate, onDelete }) => {
  return (
    <div className="task-list-container">
      <ul className="task-list">
        {tasks.length === 0 ? (
          <p>No tasks yet.</p>
        ) : (
          tasks.map((task) => (
            <TaskItem key={task._id} task={task} onUpdate={onUpdate} onDelete={onDelete} />
          ))
        )}
      </ul>
    </div>
  );
};

export default TaskList;
