import React from 'react';

function Card({ userId, id, title, description }) {


  return (
    <div className="card w-64 border mx-auto p-4">
      <h3>UserId: {userId}</h3>
      <h4>Id: {id}</h4>
      <h1>Title: {title}</h1>
      <p>Description: {description}</p>
    </div>
  );
}

export default Card;