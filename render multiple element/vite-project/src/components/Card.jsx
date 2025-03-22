
function Card(props) {

  // Could be GET or POST/PUT/PATCH/DELETE
  fetch('https://dummyjson.com/test')
    .then(res => res.json())
    .then((data) => {
      console.log(data)

    });

  /* { status: 'ok', method: 'GET' } */
  return (
    <div className="card text-center m-3 p-3 " style={{ width: "18rem", display: "flex", flexWrap: "wrap" }} >
      <img className="w-100" src="https://i.guim.co.uk/img/media/18badfc0b64b09f917fd14bbe47d73fd92feeb27/189_335_5080_3048/master/5080.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1562112c7a64da36ae0a5e75075a0d12" alt="iphone" />
      <h3 className="">Iphone 16pro</h3>
      <p className=""> Apple</p>
      <p><b>Price: $1000</b></p>
    </div>
  )
}
export default Card