import style from "./FoodItems.module.css"; // Fixed the import path

const Item = (props) => {
  return (
    <li className="list-group-item">
      <span className={style.fooditem}>{props.foodItems}</span>
    </li>
  );
};

export default Item;