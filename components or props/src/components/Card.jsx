import React from 'react'

function Card(props) {
  return (

    <div className='card bg-amber-500 shadow-md rounded-lg px-4 m-4 w-[220px] h-[250px]'>
      <div className='title'>{props.title}</div>
      <div className='content'>{props.description}</div>
    </div>

  )
}

export default Card
