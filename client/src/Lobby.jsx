import React from "react";
import { Box } from "@mui/material";
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import lobbyMusic from "./assets/audio/lobby.mp3";
import kaching from "./assets/audio/kaching.mp3";
import noCash from "./assets/audio/no-cash.mp3";

const lobbyMusic = new Audio(lobbyMusic);
const betSfx = new Audio(kaching);
const insufficientBalanceSfx = new Audio(noCash);

export default function Lobby() {
  const [bValue, setBValue] = React.useState(5);
  const [budget, setBudget] = React.useState(0);

  let bValueStatus = "green";

  const handleChange = (event, newValue) => setBValue(newValue);
  const confirmBet = () => {
    if (bValueStatus === "red") {
      window.alert("Not enough cash, stranger.")
    } else {
      setBudget(bValue);
      setBalance(balance - bValue);
    }
  };
  
  if (!budget) {
    if (balance < bValue) bValueStatus = "red";
    else bValueStatus = "green";
  }

  return (
    <Box>

    </Box>
  )
}