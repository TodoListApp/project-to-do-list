import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

function Task({ task, setUpdateTasks, updateTasks }) {
  const URL = "http://localhost:3004/tasks";

  const handleDelete = async () => {
    //   añadir sweet alert para preguntar si esta seguro de eliminar tarea
    const response = await axios.delete(`${URL}/${task.id}`);
    if (response.status === 200) {
      Swal.fire("Task deleted succesfully!");
      setUpdateTasks(!updateTasks);
    } else {
      Swal.fire("Error!");
    }
  };
  return (
    <div>
      <button>check</button>
      <p>{task.taskText}</p>
      <button onClick={handleDelete}>delete</button>
      <button>editar</button>
    </div>
  );
}

export default Task;
