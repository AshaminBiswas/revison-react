const ErrorMassege = () => {
  const foodItems = ["Burger", "Pizza", "Pasta", "Biryani", "Dosa"]; // Renamed to avoid conflict
  return (
    <>
      {foodItems.length === 0 ? <h1>No food items available</h1> : null}
    </>
  );
}

export default ErrorMassege;