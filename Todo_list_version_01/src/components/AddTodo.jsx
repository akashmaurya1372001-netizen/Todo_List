function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo" />
        </div>
        <div className="col-4">
          <input type="text" placeholder="dd/mm/yyy" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
