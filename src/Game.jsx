import React from "react";
import { Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import clubsAce from './assets/images/ace_of_clubs.png';
import clubs2 from './assets/images/2_of_clubs.png';
import clubs3 from './assets/images/3_of_clubs.png';
import clubs4 from './assets/images/4_of_clubs.png';
import clubs5 from './assets/images/5_of_clubs.png';
import clubs6 from './assets/images/6_of_clubs.png';
import clubs7 from './assets/images/7_of_clubs.png';
import clubs8 from './assets/images/8_of_clubs.png';
import clubs9 from './assets/images/9_of_clubs.png';
import clubs10 from './assets/images/10_of_clubs.png';
import clubsJack from './assets/images/jack_of_clubs.png';
import clubsQueen from './assets/images/queen_of_clubs.png';
import clubsKing from './assets/images/king_of_clubs.png';
import spadesAce from './assets/images/ace_of_spades.png';
import spades2 from './assets/images/2_of_spades.png';
import spades3 from './assets/images/3_of_spades.png';
import spades4 from './assets/images/4_of_spades.png';
import spades5 from './assets/images/5_of_spades.png';
import spades6 from './assets/images/6_of_spades.png';
import spades7 from './assets/images/7_of_spades.png';
import spades8 from './assets/images/8_of_spades.png';
import spades9 from './assets/images/9_of_spades.png';
import spades10 from './assets/images/10_of_spades.png';
import spadesJack from './assets/images/jack_of_spades.png';
import spadesQueen from './assets/images/queen_of_spades.png';
import spadesKing from './assets/images/king_of_spades.png';
import diamondsAce from './assets/images/ace_of_diamonds.png';
import diamonds2 from './assets/images/2_of_diamonds.png';
import diamonds3 from './assets/images/3_of_diamonds.png';
import diamonds4 from './assets/images/4_of_diamonds.png';
import diamonds5 from './assets/images/5_of_diamonds.png';
import diamonds6 from './assets/images/6_of_diamonds.png';
import diamonds7 from './assets/images/7_of_diamonds.png';
import diamonds8 from './assets/images/8_of_diamonds.png';
import diamonds9 from './assets/images/9_of_diamonds.png';
import diamonds10 from './assets/images/10_of_diamonds.png';
import diamondsJack from './assets/images/jack_of_diamonds.png';
import diamondsQueen from './assets/images/queen_of_diamonds.png';
import diamondsKing from './assets/images/king_of_diamonds.png';
import heartsAce from './assets/images/ace_of_hearts.png';
import hearts2 from './assets/images/2_of_hearts.png';
import hearts3 from './assets/images/3_of_hearts.png';
import hearts4 from './assets/images/4_of_hearts.png';
import hearts5 from './assets/images/5_of_hearts.png';
import hearts6 from './assets/images/6_of_hearts.png';
import hearts7 from './assets/images/7_of_hearts.png';
import hearts8 from './assets/images/8_of_hearts.png';
import hearts9 from './assets/images/9_of_hearts.png';
import hearts10 from './assets/images/10_of_hearts.png';
import heartsJack from './assets/images/jack_of_hearts.png';
import heartsQueen from './assets/images/queen_of_hearts.png';
import heartsKing from './assets/images/king_of_hearts.png';
import blackJoker from './assets/images/black_joker.png';
import redJoker from './assets/images/red_joker.png';

export default function Game() {
  let cardDeck = [
    -27, -26, -25, -24, -23, -22, -21, -20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27
  ]; // Negatives are black, positives are red. First half is clubs or diamonds - second half is spades or hearts. 1s are aces and 27s are jokers.
  function drawCards(numberOfCards) {
    let drawnCards = new Set();
    while (drawnCards.size < numberOfCards) {
      const randomIndex = Math.floor(Math.random() * cardDeck.length);
      const randomCard = cardDeck[randomIndex];
      drawnCards.add(randomCard);
    }
    return drawnCards;
  }
  function CardsInHand() {
    return (
      <Stack>
        
      </Stack>
    );
  }
  return (
    <Stack height='100vh'>
      <Typography>
        Loading...
      </Typography>
    </Stack>
  );
}