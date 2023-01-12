import React, { useState } from "react";
import AllTasks from "./components/AllTasks";
import CreateTask from "./components/CreateTask";

function App() {
  const [updateTasks, setUpdateTasks] = useState(false);
  return (
    <div className="App">
      <CreateTask setUpdateTasks={setUpdateTasks} updateTasks={updateTasks} />
      <AllTasks setUpdateTasks={setUpdateTasks} updateTasks={updateTasks} />
    </div>
  );
}

export default App;
