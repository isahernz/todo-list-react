import { useState } from "react";
import Form from "./components/Form.jsx";
import Tasks from "./components/Tasks.jsx";
import { useEffect } from "react";

const initialStateTasks = JSON.parse(localStorage.getItem("tasks")) || [];

const App = () => {
  const [tasks, setTasks] = useState(initialStateTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const updateTask = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.state = !task.state;
      }
      return task;
    });

    setTasks(newTasks);
  };

  const orderedTasks = (arrayTasks) => {
    return arrayTasks.sort((a, b) => {
      if (a.priority === b.priority) return 0;
      if (a.priority) return -1;
      if (!a.priority) return 1;
    });
  };

  return (
    <main className="container mx-auto mb-2">
      <h1 className="my-5 text-center fw-bold">To Do List</h1>

      <Form addTask={addTask} />
      <Tasks
        tasks={orderedTasks(tasks)}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
    </main>
  );
};

export default App;
