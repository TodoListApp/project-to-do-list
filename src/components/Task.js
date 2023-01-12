import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import iconCheckDone from "../assets/img/checkEmpty.svg";

function Task({ task, setUpdateTasks, updateTasks }) {
  const URL = "http://localhost:3004/tasks";
  const [editData, setEditData] = useState({ taskText: task.taskText });

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

  const handleEdit = ({ target }) => {
    setEditData({
      ...editData,
      [target.name]: target.value,
    });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.put(`${URL}/${task.id}`, editData);
    setEditData(response.data);
    setUpdateTasks(!updateTasks);
  };
  return (
    <div>
      <button onClick={() => {}}>
        <img src={iconCheckDone} alt="" />
      </button>
      <input
        name="taskText"
        value={editData.taskText}
        type="text"
        placeholder={task.taskText}
        onChange={handleEdit}
      />
      <button onClick={handleEditSubmit}>guardar texto editado</button>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
}

export default Task;
