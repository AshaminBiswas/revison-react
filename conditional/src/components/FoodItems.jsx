import Item from "./Item";
import style from "./FoodItems.module.css";

const FoodItems = () => {
  let foodItems = ["Burger", "Pizza", "Pasta", "Biryani", "Dosa"];

  return (
    <center>
      <h1 className={style.heading}>Healthy Food</h1> {/* Fixed the style usage */}
      <ul className="list-group">
        {foodItems.map((item) => (
          <Item key={item} foodItems={item}></Item>
        ))}
      </ul>
    </center>
  );
};

export default FoodItems;