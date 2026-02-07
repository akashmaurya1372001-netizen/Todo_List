function Todoitem2() {
    let item='Buy milk'
    let date="06/06/2026"
    return(
        <div className="container text-center">
        <div className="row">
          <div className="col-6">{item}</div>
          <div className="col-4">{date}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
        </div>
    );
}
export default Todoitem2; 