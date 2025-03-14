function TodoItemTwo() {

  let todoName = "";
  let todoDate = "";

  return (
    <div className="row rows">
      <div className="col-6">
        <p>Go to market</p>
      </div>
      <div className="col-4">
        <p>25 / 08 / 2025</p>
      </div>
      <div className="col-2">
        <button class="btn btn-danger todo-button">Delete</button>
      </div>
    </div>
  )
}
export default TodoItemTwo