import React from "react";
import { Box, Button, Slider, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion"
import WalletIcon from '@mui/icons-material/Wallet';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import kaching from './assets/audio/kaching.mp3';
import door from './assets/audio/door.mp3';
import noCash from './assets/audio/no-cash.mp3';
import Game from "./Game";

const kachingSfx = new Audio(kaching);
const doorOpenSfx = new Audio(door);
const insufficientBalanceSfx = new Audio(noCash);

export default function MainMenu() {
  const [gameState, setGameState] = React.useState(0);
  const [balance, setBalance] = React.useState(25);
  const [bValue, setBValue] = React.useState(5);
  const [budget, setBudget] = React.useState(0);
  
  let bValueStatus = 'green';
  
  if (!budget) {
    if (balance < bValue) bValueStatus = 'red';
    else bValueStatus = 'green';
  }

  React.useEffect(() => {
    if (gameState === 1) {
      doorOpenSfx.play();
    } else if (gameState === 2) {
      // sds
    } else {
      setBudget(0);
    }
  }, [gameState]);

  const handleChange = (event, newValue) => setBValue(newValue);
  const confirmBet = () => {
    if (bValueStatus === 'red') {
      insufficientBalanceSfx.play();
      window.alert("Not enough cash, stranger.")
    } else {
      setBudget(bValue);
      setBalance(balance - bValue);
      kachingSfx.play();
    }
  }

  return (
    <Box>
      <Stack direction='row' spacing={0.5}>
        <WalletIcon fontSize="large" />
        <Typography fontSize={24} sx={{ userSelect: 'none' }}>
          ${balance}K
        </Typography>
      </Stack>
      { gameState === 0 &&
        <Stack alignItems='center'>
          <motion.div whileTap={{ rotate: 1 }}>
            <Typography fontSize={20} sx={{ userSelect: 'none' }}>
              Welcome to the poker table! Grab a seat and place your bets!
            </Typography>
          </motion.div>
          <Stack direction='row' spacing={2}>
            <Box width={200}>
              <Slider
                color="success"
                min={5}
                step={5}
                disabled={budget}
                onChange={handleChange}
              />
            </Box>
            <Typography color={bValueStatus} fontSize={20} sx={{ userSelect: 'none' }}>
              {bValue}K
            </Typography>
            <Button
              variant="contained"
              color="success"
              disabled={budget}
              onClick={confirmBet}
            >
              Take
            </Button>
            { budget > 0 &&
              <PriceCheckIcon color="success" />
            }
          </Stack>
        { budget > 0 &&
          <Stack justifyContent='center' alignItems='center' height={400}>
            <motion.div animate={{ y: -10 }}>
              <Typography
                color='gold'
                fontSize={25}
                fontWeight='bold'
                sx={{ textShadow: '2px 2px goldenrod', userSelect: 'none' }}
              >
                Ready to PLAY?
              </Typography>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <Button
                variant="contained"
                color="warning"
                onClick={() => setGameState(1)}
              >
                Yes
              </Button>
            </motion.div>
          </Stack>
        }
        </Stack>
      }
      { gameState === 1 &&
        <Game />
      }
    </Box>
  )
}