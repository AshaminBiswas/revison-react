function TodoItemOne() {
  let todoName = "First Todo"
  let todoDate = "22 / 08 / 2025"
  return (
    <div className="row rows">
      <div className="col-6">
        <p>{todoName}</p>
      </div>
      <div className="col-4">
        <p> {todoDate} </p>
      </div>
      <div className="col-2">
        <button class="btn btn-danger todo-button">Delete</button>
      </div>
    </div>
  )
}
export default TodoItemOne