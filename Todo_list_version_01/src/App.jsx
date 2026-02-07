import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      
      <div className="container text-center">
        <div className="row">
          <div className="col-6">Buy milk</div>
          <div className="col-4">6/06/2026</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-6">Go to College</div>
          <div className="col-4">6/06/2026</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </center>
  );
}
export default App;
