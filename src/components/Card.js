import React from "react";

function Card({ src, onclick }) {
    return (
      <div onClick={onclick}>
        <img src={src} alt="supreme court justice" className="card" />
      </div>
    );
}

export default Card;
