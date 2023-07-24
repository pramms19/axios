import Header from "./component/Header";
import Tasks from "./component/Tasks";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AddTask from "./component/AddTask";
import Footer from "./component/Footer";
import About from "./component/About";

import { axiosClient } from "./api";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  // fetch tasks

  const fetchTasks = async (id) => {
    const res = await axiosClient.get("/tasks");

    setTasks(res?.data);
  };

  // Add tasks
  const addTask = async (task) => {
    const res = await axiosClient.post(`/tasks`, task);

    const data = await res.data;
    setTasks([...tasks, { id: data.id, ...task }]);
  };

  // Delete tasks
  const deleteTask = async (id) => {
    await axiosClient.delete(`/tasks/${id}`);

    setTasks(tasks.filter((task) => task.id !== id));
  };

  //toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await axiosClient(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    const res = await axiosClient.put(`/tasks/${id}`, updTask);

    const data = await res.data;
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !data.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                <div> No Tasks To Show </div>
              )}
            </>
          }
        />

        <Route path="/about" element={<About />}>
          <Route path="a" element={<h1> asfasdf</h1>} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
