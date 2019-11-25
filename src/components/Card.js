import React from "react";

function Card({ id, src, onclick }) {
    return (
      <div onClick={() => onclick(id)}>
        <img src={src} alt="supreme court justice" className="card" />
      </div>
    );
}

export default Card;
