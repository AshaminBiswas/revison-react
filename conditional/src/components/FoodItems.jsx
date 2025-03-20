function FoodItems() {
  let foodItems = ["Burger", "Pizza", "Pasta", "Biryani", "Dosa"];


  return (

    <center>
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </center>
  )

}

export default FoodItems;