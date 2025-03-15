import "bootstrap/dist/css/bootstrap.min.css"
import ClockHeading from "./components/ClockHeading"
import Tagline from "./components/Tagline"
import Time from "./components/Time"

function App() {


  return (
    <center>
      <div className="container py-3 ">
        <ClockHeading />
        <Tagline />
        <Time />
      </div>
    </center>
  )
}

export default App
