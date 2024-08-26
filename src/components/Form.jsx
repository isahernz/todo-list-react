import { useState } from "react";
import Swal from "sweetalert2";

const Form = ({ addTask }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    state: "pending",
    priority: true,
  });

  const { title, description, state, priority } = task;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Título y descripción obligatorios",
      });
    }

    addTask({
      id: Date.now(),
      ...task,
      state: state === "complete", // Si es igual devuelve True si no False
    });

    Swal.fire({
      icon: "success",
      title: "Tarea creada satisfactoriamente!",
      showConfirmButton: false,
      timer: 1500,
    });

    setTask({
      title: "",
      description: "",
      state: "pending",
      priority: true,
    });
  };

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setTask({
      ...task,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex flex-column gap-3 col-12 col-sm-6 mx-auto"
    >
      <input
        type="text"
        className="form-control"
        placeholder="Título"
        name="title"
        value={title}
        onChange={handleChange}
      />

      <textarea
        className="form-control"
        placeholder="Detalles"
        name="description"
        value={description}
        onChange={handleChange}
      />

      <div className="d-flex gap-2 align-items-center">
        <select
          className="form-select"
          name="state"
          value={state}
          onChange={handleChange}
        >
          <option value="pending">Pendiente</option>
          <option value="complete">Completado</option>
        </select>

        <div className="form-check ">
          <input
            type="checkbox"
            name="priority"
            className="form-check-input"
            id="inputCheck"
            checked={priority}
            onChange={handleChange}
          />
          <label htmlFor="inputCheck" className="form-check-label">
            Prioritaria
          </label>
        </div>
      </div>

      <button className="btn btn-primary col-12" type="submit">
        Agregar Task
      </button>
    </form>
  );
};

export default Form;
