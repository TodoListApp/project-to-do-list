import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

function CreateTask({ setUpdateTasks, updateTasks }) {
  const [data, setData] = useState({ taskText: "", check: false });

  const handleChange = ({ target }) => {
    setData({
      ...data,
      [target.name]: target.value,
    });
  };

  const URL = "http://localhost:3004/tasks";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(URL, data);
    if (response.status === 201) {
      Swal.fire("Task added succesfully!");
      setUpdateTasks(!updateTasks);
    } else {
      Swal.fire("Error!");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Task to add...
          <input
            type="text"
            name="taskText"
            value={data.taskText}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">+</button>
      </form>
    </div>
  );
}

export default CreateTask;
