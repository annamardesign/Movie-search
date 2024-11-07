import React from 'react';
import Tile from './ui/Tile';

function Card({ title, overview, picture }) {
  return (
    <Tile>
      <div className='cardImage'>
        <img className='image' src={picture} alt={title} />
      </div>
      <h1 className='cardTitle'>{title}</h1>
      <p className='cardText'>{overview}</p>
    </Tile>
  );
}

export default Card;
