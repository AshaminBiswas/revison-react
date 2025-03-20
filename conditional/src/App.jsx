import FoodItems from './components/FoodItems'
import ErrorMassege from './components/ErrorMassege'
import "bootstrap/dist/css/bootstrap.min.css";  // Importing bootstrap CSS
import './App.css'
function App() {


  return (
    <div>
      {/* <Food></Food> */}
      <FoodItems></FoodItems>
      <ErrorMassege></ErrorMassege>
    </div>
  )
}

export default App
