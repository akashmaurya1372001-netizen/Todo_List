import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import Todoitems from "./components/Todoitems";
function App() {
  const todoItems=[ {
    name:"Buy milk",
    dueDate:"06/06/2026"
  },
{
  name:"Go to College",
  dueDate:"06/09/2026"
}
];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <Todoitems></Todoitems>
    </center>
  );
}
export default App;
