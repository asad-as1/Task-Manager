import { useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "../../api/taskApi";
import TaskForm from "../../components/TaskForm/TaskForm";
import TaskList from "../../components/TaskList/TaskList";
import "./Home.css";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const handleAddTask = async (task) => {
    const newTask = await createTask(task);
    setTasks([...tasks, newTask]);
  };

  const handleUpdateTask = async (id, updatedTask) => {
    await updateTask(id, updatedTask);
    fetchTasks();
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <div className="home-container">
      <h1 className="home-heading">Task Manager</h1>
      <TaskForm onAdd={handleAddTask} />
      <TaskList tasks={tasks} onUpdate={handleUpdateTask} onDelete={handleDeleteTask} />
    </div>
  );
};

export default Home;
