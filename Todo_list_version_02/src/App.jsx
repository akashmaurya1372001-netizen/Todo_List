import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Todoitem from "./components/Todoitem";
import "./App.css";
function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="item-container">
        <Todoitem item="Go to college" date="06/06/2026"></Todoitem>
        <Todoitem item="Buy milk" date="06/06/2026"></Todoitem>
      </div>
    </center>
  );
}
export default App;
