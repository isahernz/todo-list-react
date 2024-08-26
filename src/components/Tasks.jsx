import Task from "./Task.jsx";

const Tasks = ({ tasks, deleteTask, updateTask }) => {
  return (
    <div className="mt-5">
      <h2 className="text-center mb-4">Tasks</h2>
      <ul className="container d-flex flex-column gap-2">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        ))}
        {!tasks.length && (
          <span className="text-center">¡No hay tareas por hacer!</span>
        )}
      </ul>
    </div>
  );
};

export default Tasks;
