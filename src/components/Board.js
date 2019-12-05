import React, { useState, useEffect } from "react";

import justices from '../constants/justices';
import Card from './Card'

function Board( {increment, resetScore }) {
    const [cards, setCards] = useState(justices());
    const [isShaking, setShake] = useState(false);
    const [isShuffle, setShuffle] = useState(false);

    const shuffleCards = cardArr => {
      let shuffledArr = [...cardArr];
      for (let i = shuffledArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = shuffledArr[i];
        shuffledArr[i] = shuffledArr[j];
        shuffledArr[j] = temp;
      }
      setCards(shuffledArr)      
    };

    useEffect(() => {
        shuffleCards(cards)
    }, [isShuffle])
    
    const resetCards = () => {
        return justices()
    }
    const handleClick = (id) => {
        cards.forEach((card, index) => {
            if (card.id === id) {
                if (card.isClicked) {
                    gameOver();
                } else {
                   gameContinue(index); 
                }
            }
        })
    }
    function gameOver() {
        setShake(true);
        setTimeout(() => {
        setCards(resetCards());
        setShuffle(!isShuffle);
        resetScore();
        setShake(false);
        }, 1000);
    }

    function gameContinue(index) {
        increment();
        setCards(prevCards => {
        const updatedCards = [...prevCards];
        updatedCards[index].isClicked = true;
        return updatedCards;
        });
        setShuffle(!isShuffle);
    }
    const displayCards = cards.slice(0,12).map(card => 
        <Card key={card.id} card={card} onclick={handleClick} />
    );
  return <main className={isShaking ? "shake" : undefined}>{displayCards}</main>;
}

export default Board;
