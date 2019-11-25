import React from "react";

function Header({ score, highScore}) {
  return (
    <header>
      <div>
        <span className="title">Click-Click Game</span>
        <span className="title-supreme">Supreme Edition</span>
      </div>
      <div>
        <span>Score:</span>
        <span className="score">{score}</span>
        <span>Highscore:</span>
        <span className="score">{highScore}</span>
      </div>
    </header>
  );
}

export default Header;
