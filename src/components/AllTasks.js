import React, { useEffect, useState } from "react";
import axios from "axios";
import Task from "./Task";

function AllTasks() {
  const URL = "http://localhost:3004/tasks";

  const getData = async () => {
    const response = axios.get(URL);
    return response;
  };

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getData().then((response) => {
      setTasks(response.data);
    });
  }, []);

  return (
    <div>
      {tasks.map((task, index) => (
        <Task key={index} task={task} />
      ))}
    </div>
  );
}

export default AllTasks;
