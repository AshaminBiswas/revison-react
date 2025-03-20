function AddTodo() {
  return <div className="row rows">
    <div className="col-6">
      <input type="text" placeholder="enter todo here" />
    </div>
    <div className="col-4">
      <input type="date" name="date" id="tate" />
    </div>
    <div className="col-2">
      <button class="btn btn-success todo-button">Add</button>
    </div>
  </div>
}
export default AddTodo