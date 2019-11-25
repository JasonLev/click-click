import React, {useState} from "react";

import justices from '../constants/justices';
import Card from './Card'

function Board( {increment, resetScore }) {
    const[cards, setCards] = useState(justices);
    const[isShaking, setShake] = useState(false);

    const shuffleCards = cardArr => {
        for (let i = (cardArr.length - 1); i > 0; i--){
            const j = Math.floor(Math.random() * i)
            const temp = cardArr[i]
            cardArr[i] = cardArr[j]
            cardArr[j] = temp
        }
        return cardArr;
    }
    const getResetCards = cards => {
        return cards.map(card => {
            const resetCard = card;
            resetCard.isClicked = false;
            return resetCard
        });
    }
    const handleClick = (id) => {
        cards.forEach((card, index) => {
            if (card.id === id && card.isClicked){
                setShake(true)
                setTimeout(() => {
                    setCards(getResetCards(cards));
                    resetScore()
                    setShake(false)
                }, 1000)
                // setCards(getResetCards(cards));
                // reset()
            } else if (card.id === id) {
                increment();
                setCards(prevCards => {
                    prevCards[index].isClicked = true;
                    return prevCards
                })
            }
        })
    }
    const displayCards = shuffleCards(cards).slice(0,12).map(card => 
        <Card key={card.id} id={card.id} src={card.src} onclick={handleClick} />
    );
  return <main className={isShaking ? "shake" : undefined}>{displayCards}</main>;
}

export default Board;
