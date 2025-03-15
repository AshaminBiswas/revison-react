function Time() {

  let date = new Date()

  return (
    <div className="row">
      <div>
        <p className="lead">This is the current time: {date.toLocaleDateString()} - {date.toLocaleTimeString()} </p>

      </div>
    </div>
  )
}

export default Time