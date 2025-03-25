import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks"; 

export const getTasks = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
};


export const createTask = async (task) => {
  try {
    const res = await axios.post(API_URL, task);
    return res.data;
  } catch (error) {
    console.error("Error creating task:", error);
  }
};


export const updateTask = async (id, updatedTask) => {
  try {
    const res = await axios.put(`${API_URL}/${id}`, updatedTask);
    return res.data;
  } catch (error) {
    console.error("Error updating task:", error);
  }
};


export const deleteTask = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};
