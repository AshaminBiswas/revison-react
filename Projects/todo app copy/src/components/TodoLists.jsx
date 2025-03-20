import TodoItem from "./TodoItem";

const TodoLists = ({ todoLists }) => {
  return (
    <>
      {todoLists.map((item, index) => {
        return (
          <TodoItem
            key={index} // Added a unique key prop
            todoName={item.name}
            todoDate={item.date}
          />
        );
      })}
    </>
  );
};

export default TodoLists;