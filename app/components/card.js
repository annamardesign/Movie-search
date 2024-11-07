import React from 'react';

function Card({ title, overview, picture }) {
  return (
    <div className='card'>
      <div className='cardImage'>
        <img className='image' src={picture} alt={title} />
      </div>
      <h1 className='cardTitle'>{title}</h1>
      <p className='cardText'>{overview}</p>
    </div>
  );
}

export default Card;
