import React from "react";
import { Box, Button, Slider, Stack, TextField, Typography } from "@mui/material";
import { motion } from "framer-motion"
import WalletIcon from '@mui/icons-material/Wallet';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import hit from "./assets/audio/hit.mp3";
import wiiConfirm from "./assets/audio/wii-confirm.mp3";
import roomWaiting from "./assets/audio/room-waiting.mp3";
import kaching from "./assets/audio/kaching.mp3";
import door from "./assets/audio/door.mp3";
import noCash from "./assets/audio/no-cash.mp3";
import Game from "./Game";

const quickMatchSfx = new Audio(hit);
const joinRoomSfx = new Audio(wiiConfirm);
const waitingRoomSfx = new Audio(roomWaiting);
const betSfx = new Audio(kaching);
const startGameSfx = new Audio(door);
const insufficientBalanceSfx = new Audio(noCash);

export default function MainMenu() {
  const [room, setRoom] = React.useState("");
  const [roomTemp, setRoomTemp] = React.useState("");
  const [gameState, setGameState] = React.useState(0);
  const [balance, setBalance] = React.useState(25);
  const [bValue, setBValue] = React.useState(5);
  const [budget, setBudget] = React.useState(0);

  React.useEffect(() => {
    if (gameState === 1) {
      waitingRoomSfx.play();
    } else if (gameState === 2) {
      // something
    } else {
      setBudget(0);
    }
  }, [gameState]);

  let bValueStatus = "green";
  if (!budget) {
    if (balance < bValue) bValueStatus = "red";
    else bValueStatus = "green";
  }

  const quickMatch = () => {
    quickMatchSfx.play();
  }

  const joinRoom = () => {
    if (roomTemp !== "") {
      setRoom(roomTemp);
      joinRoomSfx.play();
    }
  };

  const handleChange = (event, newValue) => setBValue(newValue);
  const confirmBet = () => {
    if (bValueStatus === "red") {
      insufficientBalanceSfx.play();
      window.alert("Not enough cash, stranger.")
    } else {
      setBudget(bValue);
      setBalance(balance - bValue);
      betSfx.play();
    }
  };

  return (
    <Box>
      <Stack direction="row" spacing={0.5} position="fixed">
        <WalletIcon fontSize="large" />
        <Box>
          <Typography fontSize={24} sx={{ userSelect: "none" }}>
            ${balance}K
          </Typography>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ y: budget ? 10 : 0, opacity: budget ? [0.5,0.5,0.5,0] : 0 }}
            transition={{ duration: 0.6, from: -20 }}
          >
            <Typography fontSize={24} sx={{ userSelect: "none" }}>
              -${bValue}K
            </Typography>
          </motion.div>
        </Box>
      </Stack>
      { gameState === 0 && !room &&
        <Stack justifyContent="center" alignItems="center" spacing={3} height="100vh">
          <Button variant="contained" color="warning" onClick={quickMatch}>Quickmatch</Button>
          <Typography fontWeight="bold">- OR -</Typography>
          <Box>
            <Typography fontSize={18}>Join a private room:</Typography>
            <Stack direction="row" spacing={2}>
              <TextField variant="filled" label="Room ID" onChange={(event) => {
                setRoomTemp(event.target.value);
              }} />
              <Button variant="contained" onClick={joinRoom}>Join room</Button>
            </Stack>
          </Box>
        </Stack>
      }
      { gameState === 0 && room &&
        <Stack justifyContent="center" alignItems="center" height="100vh">
          <Typography fontSize={20} sx={{ userSelect: "none" }}>
            You are currently waiting in <b>Room {room}</b>.<br />
            Choose how much to take with you.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Box width={200}>
              <Slider
                color="success"
                min={5}
                step={5}
                disabled={budget}
                onChange={handleChange}
              />
            </Box>
            <Typography color={bValueStatus} fontSize={20} sx={{ userSelect: "none" }}>
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
            <Stack justifyContent="center" alignItems="center">
              <motion.div animate={{ y: -10 }}>
                <Typography
                  color="gold"
                  fontSize={25}
                  fontWeight="bold"
                  sx={{ textShadow: "2px 2px goldenrod", userSelect: "none" }}
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
  );
}