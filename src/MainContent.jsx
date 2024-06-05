import React from "react";
import { Box, Button, Slider, Stack, Typography } from "@mui/material";
import WalletIcon from '@mui/icons-material/Wallet';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import kaching from './assets/audio/kaching.mp3';

const kachingSfx = new Audio(kaching);

export default function MainContent() {
  const [gameState, setGameState] = React.useState(0);
  const [balance, setBalance] = React.useState(25);
  const [bet, setBet] = React.useState(0);
  if (gameState === 1) {
    // do something
  } else if (gameState === 2 ) {
    // do something
  }
  function confirmBet() {
    setBet(100);
    kachingSfx.play()
  }
  return (
    <Box>
      <Stack direction='row' spacing={0.5}>
        <WalletIcon fontSize="large" />
        <Typography fontSize={24} sx={{ userSelect: 'none' }}>
          ${balance}K
        </Typography>
      </Stack>
      <Stack alignItems='center'>
        <Typography fontSize={20} fontWeight='bold'>
          Welcome to the poker table! Grab a seat and place your bets!
        </Typography>
        <Stack direction='row' width={200}>
          <Slider
            valueLabelDisplay="auto"
            min={10}
            step={10}
          />
          <Button variant="contained" color="success" onClick={confirmBet}>BET</Button>
          { bet &&
            <PriceCheckIcon color="success" />
          }
        </Stack>
        <Typography
          color='gold'
          fontSize={25}
          fontWeight='bold'
          sx={{ textShadow: '2px 2px goldenrod' }}
        >
          Ready to PLAY?
        </Typography>
        <Button variant="contained" color="warning" onClick={() => setGameState(1)}>Yes</Button>
      </Stack>
    </Box>
  )
}