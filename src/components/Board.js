import React from "react";

import justices from '../constants/justices';
import Card from './Card'

function Board() {
  const handleClick = () => {console.log("click event")}
  const cards = justices.map(card => <Card key={card.id} src={card.src} onclick={handleClick} />)
  return <main>{cards}</main>;
}

export default Board;
