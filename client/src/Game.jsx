import React from "react";
import { Stack } from "@mui/material";
import { motion } from "framer-motion";
import clubsAce from "./assets/images/ace_of_clubs.png";
import clubs2 from "./assets/images/2_of_clubs.png";
import clubs3 from "./assets/images/3_of_clubs.png";
import clubs4 from "./assets/images/4_of_clubs.png";
import clubs5 from "./assets/images/5_of_clubs.png";
import clubs6 from "./assets/images/6_of_clubs.png";
import clubs7 from "./assets/images/7_of_clubs.png";
import clubs8 from "./assets/images/8_of_clubs.png";
import clubs9 from "./assets/images/9_of_clubs.png";
import clubs10 from "./assets/images/10_of_clubs.png";
import clubsJack from "./assets/images/jack_of_clubs.png";
import clubsQueen from "./assets/images/queen_of_clubs.png";
import clubsKing from "./assets/images/king_of_clubs.png";
import spadesAce from "./assets/images/ace_of_spades.png";
import spades2 from "./assets/images/2_of_spades.png";
import spades3 from "./assets/images/3_of_spades.png";
import spades4 from "./assets/images/4_of_spades.png";
import spades5 from "./assets/images/5_of_spades.png";
import spades6 from "./assets/images/6_of_spades.png";
import spades7 from "./assets/images/7_of_spades.png";
import spades8 from "./assets/images/8_of_spades.png";
import spades9 from "./assets/images/9_of_spades.png";
import spades10 from "./assets/images/10_of_spades.png";
import spadesJack from "./assets/images/jack_of_spades.png";
import spadesQueen from "./assets/images/queen_of_spades.png";
import spadesKing from "./assets/images/king_of_spades.png";
import diamondsAce from "./assets/images/ace_of_diamonds.png";
import diamonds2 from "./assets/images/2_of_diamonds.png";
import diamonds3 from "./assets/images/3_of_diamonds.png";
import diamonds4 from "./assets/images/4_of_diamonds.png";
import diamonds5 from "./assets/images/5_of_diamonds.png";
import diamonds6 from "./assets/images/6_of_diamonds.png";
import diamonds7 from "./assets/images/7_of_diamonds.png";
import diamonds8 from "./assets/images/8_of_diamonds.png";
import diamonds9 from "./assets/images/9_of_diamonds.png";
import diamonds10 from "./assets/images/10_of_diamonds.png";
import diamondsJack from "./assets/images/jack_of_diamonds.png";
import diamondsQueen from "./assets/images/queen_of_diamonds.png";
import diamondsKing from "./assets/images/king_of_diamonds.png";
import heartsAce from "./assets/images/ace_of_hearts.png";
import hearts2 from "./assets/images/2_of_hearts.png";
import hearts3 from "./assets/images/3_of_hearts.png";
import hearts4 from "./assets/images/4_of_hearts.png";
import hearts5 from "./assets/images/5_of_hearts.png";
import hearts6 from "./assets/images/6_of_hearts.png";
import hearts7 from "./assets/images/7_of_hearts.png";
import hearts8 from "./assets/images/8_of_hearts.png";
import hearts9 from "./assets/images/9_of_hearts.png";
import hearts10 from "./assets/images/10_of_hearts.png";
import heartsJack from "./assets/images/jack_of_hearts.png";
import heartsQueen from "./assets/images/queen_of_hearts.png";
import heartsKing from "./assets/images/king_of_hearts.png";
import blackJoker from "./assets/images/black_joker.png";
import redJoker from "./assets/images/red_joker.png";
import door from "./assets/audio/door.mp3";

const startGameSfx = new Audio(door);

export default function Game() {
  const [gameState, setGameState] = React.useState(0);
  
  let cardDeck = [
    -27, -26, -25, -24, -23, -22, -21, -20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27
  ]; // Negatives are black, positives are red. First half is clubs or diamonds - second half is spades or hearts. 1s and 14s are aces and 27s are jokers.

  function CardHand({ cards }) {
    let cardImgs = [];
    for (let i = 0; i < cards.length; i++) {
      switch(cards[i]) {
        case -27:
          cardImgs.push(blackJoker);
          break;
        case -26:
          cardImgs.push(spadesKing);
          break;
        case -25:
          cardImgs.push(spadesQueen);
          break;
        case -24:
          cardImgs.push(spadesJack);
          break;
        case -23:
          cardImgs.push(spades10);
          break;
        case -22:
          cardImgs.push(spades9);
          break;
        case -21:
          cardImgs.push(spades8);
          break;
        case -20:
          cardImgs.push(spades7);
          break;
        case -19:
          cardImgs.push(spades6);
          break;
        case -18:
          cardImgs.push(spades5);
          break;
        case -17:
          cardImgs.push(spades4);
          break;
        case -16:
          cardImgs.push(spades3);
          break;
        case -15:
          cardImgs.push(spades2);
          break;
        case -14:
          cardImgs.push(spadesAce);
          break;
        case -13:
          cardImgs.push(clubsKing);
          break;
        case -12:
          cardImgs.push(clubsQueen);
          break;
        case -11:
          cardImgs.push(clubsJack);
          break;
        case -10:
          cardImgs.push(clubs10);
          break;
        case -9:
          cardImgs.push(clubs9);
          break;
        case -8:
          cardImgs.push(clubs8);
          break;
        case -7:
          cardImgs.push(clubs7);
          break;
        case -6:
          cardImgs.push(clubs6);
          break;
        case -5:
          cardImgs.push(clubs5);
          break;
        case -4:
          cardImgs.push(clubs4);
          break;
        case -3:
          cardImgs.push(clubs3);
          break;
        case -2:
          cardImgs.push(clubs2);
          break;
        case -1:
          cardImgs.push(clubsAce);
          break;
        case 1:
          cardImgs.push(diamondsAce);
          break;
        case 2:
          cardImgs.push(diamonds2);
          break;
        case 3:
          cardImgs.push(diamonds3);
          break;
        case 4:
          cardImgs.push(diamonds4);
          break;
        case 5:
          cardImgs.push(diamonds5);
          break;
        case 6:
          cardImgs.push(diamonds6);
          break;
        case 7:
          cardImgs.push(diamonds7);
          break;
        case 8:
          cardImgs.push(diamonds8);
          break;
        case 9:
          cardImgs.push(diamonds9);
          break;
        case 10:
          cardImgs.push(diamonds10);
          break;
        case 11:
          cardImgs.push(diamondsJack);
          break;
        case 12:
          cardImgs.push(diamondsQueen);
          break;
        case 13:
          cardImgs.push(diamondsKing);
          break;
        case 14:
          cardImgs.push(heartsAce);
          break;
        case 15:
          cardImgs.push(hearts2);
          break;
        case 16:
          cardImgs.push(hearts3);
          break;
        case 17:
          cardImgs.push(hearts4);
          break;
        case 18:
          cardImgs.push(hearts5);
          break;
        case 19:
          cardImgs.push(hearts6);
          break;
        case 20:
          cardImgs.push(hearts7);
          break;
        case 21:
          cardImgs.push(hearts8);
          break;
        case 22:
          cardImgs.push(hearts9);
          break;
        case 23:
          cardImgs.push(hearts10);
          break;
        case 24:
          cardImgs.push(heartsJack);
          break;
        case 25:
          cardImgs.push(heartsQueen);
          break;
        case 26:
          cardImgs.push(heartsKing);
          break;
        case 27:
          cardImgs.push(redJoker);
          break;
        default:
          throw new Error("Value out of range!");
      }
    }
    return (
      <Stack direction="row">
        {cardImgs.map(card => <img src={card} alt="" width={80} />)}
      </Stack>
    );
  }

  function drawCards(numCards) {
    let drawnCards = [];
    while (drawnCards.length < numCards) {
      const randomIndex = Math.floor(Math.random() * cardDeck.length);
      const randomCard = cardDeck[randomIndex];
      drawnCards.push(randomCard);
      cardDeck.splice(randomIndex, 1);
    }
    return drawnCards;
  }

  return ( // for now justifyContent and alignItems is center
    <Stack justifyContent="center" alignItems="center" height="100vh">
      <CardHand cards={drawCards(2)} />
    </Stack>
  );
}