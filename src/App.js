import "./App.css";
import AllTasks from "./components/AllTasks";
import CreateTask from "./components/CreateTask";

function App() {
  return (
    <div className="App">
      <CreateTask/>
      <AllTasks/>
    </div>
  );
}

export default App;
