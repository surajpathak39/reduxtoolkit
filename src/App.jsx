import "./App.css";
import AddTodo from "./components/AddToDo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div>
        <h1>Redux tool kit</h1>
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
