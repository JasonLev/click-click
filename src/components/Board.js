import React, {useState} from "react";

import justices from '../constants/justices';
import Card from './Card'

function Board( {increment, reset }) {
    const[cards, setCards] = useState(justices);

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
            const resetCard = {...card};
            resetCard.isClicked = false;
            return resetCard
        });
    }
    const handleClick = (id) => {
        cards.forEach((card, index) => {
            if (card.id === id && card.isClicked){
                setCards(getResetCards(cards));
                reset()
            } else if (card.id === id) {
                increment();
                let newCard = card;
                newCard.isClicked = true;
                setCards(prevCards => {
                    prevCards.splice(index, 1);
                    return [...prevCards, newCard]
                })
            }
        })
    }
    const displayCards = shuffleCards(cards).slice(0,12).map(card => 
        <Card key={card.id} id={card.id} src={card.src} onclick={handleClick} />
    );
  return <main>{displayCards}</main>;
}

export default Board;
