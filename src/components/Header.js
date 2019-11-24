import React from "react";

function Header() {
  return (
    <header>
      <div>
        <span className="title">Click-Click Game</span>
        <span className="title-supreme">Supreme Edition</span>
      </div>
      <div>
        <span>Score:</span>
        <span>0</span>
        <span>Highscore:</span>
        <span>0</span>
      </div>
    </header>
  );
}

export default Header;
