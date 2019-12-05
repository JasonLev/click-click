import React from "react";

function Card({ card, onclick }) {
  const { id, src } = card;
    return (
      <div onClick={() => onclick(id)}>
        <img src={src} alt="supreme court justice" className="card" />
      </div>
    );
}

export default Card;
