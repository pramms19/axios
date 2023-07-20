import Header from "./component/Header";
import Tasks from "./component/Tasks";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors appointment",
      day: "Dec 19 at 7am",
      reminder: true,
    },

    {
      id: 2,
      text: "Dentist appointment",
      day: "Jan 11 at 9am",
      reminder: true,
    },

    {
      id: 3,
      text: "Meeting",
      day: "May 7 at 8:30am",
      reminder: false,
    },
  ]);

  // Delete tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log("delete", id);
  };

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
};

export default App;
