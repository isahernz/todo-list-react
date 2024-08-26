import Swal from "sweetalert2";
const Task = ({ task, deleteTask, updateTask }) => {
  const { title, description, state, priority, id } = task;

  const handleClickDelete = () => {
    Swal.fire({
      title: "¿Quieres borrar esta tarea?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, quiero hacerlo",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTask(id);
        Swal.fire({
          title: "Tarea eliminada!",
          icon: "success",
        });
      }
    });
  };

  return (
    <li className="d-flex align-items-center row p-2 border-bottom border-primary-subtle col-12 col-sm-8 mx-auto">
      <div className="d-flex flex-column gap-2 col-10">
        <div>
          <h3
            className={`text-break ${state && "text-decoration-line-through"}`}
          >
            {title}
          </h3>
          <p className="text-break">{description}</p>
        </div>

        <div className="d-flex align-items-center justify-sm-content-center gap-2">
          {
            <span
              className={`badge text-bg-${state ? "success" : "secondary"}`}
            >
              {state ? "Completado" : "Pendiente"}
            </span>
          }
          {priority && <span className="badge text-bg-danger">Importante</span>}
        </div>
      </div>

      <div className="d-flex flex-column flex-sm-row gap-2 align-items-center justify-content-center gap-2 col-2">
        <button
          type="button"
          className="btn btn-outline-secondary btn-sm"
          onClick={() => updateTask(id)}
        >
          ✅
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary btn-sm"
          onClick={handleClickDelete}
        >
          🗑️
        </button>
      </div>
    </li>
  );
};

export default Task;
