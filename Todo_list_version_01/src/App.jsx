import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Todoitem1 from "./components/Todoitem1";
import Todoitem2 from "./components/Todoitem2";
 import "./App.css";
function App() {
  return( 
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="item-container">
      <Todoitem1/>
      <Todoitem2></Todoitem2>
     </div>
    </center>
  );
}
export default App;
