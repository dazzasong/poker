import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion"
import io from "socket.io-client";
import WalletIcon from '@mui/icons-material/Wallet';
import CreateRoomPage from "./CreateRoomPage";

const socket = io.connect("http://localhost:3001");

export default function MainMenu() {
  const [menuState, setMenuState] = React.useState(0);
  const [balance, setBalance] = React.useState(25);
  const [bal, setBal] = React.useState(0); // can check before doing animation - if > or <, then... after, set balance to that value
  let tempReplace;
  // react.useEffect for balance, do animations on change, check if increased or lost
  // maybe pass props from here to Lobby.jsx?
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
            animate={{ y: tempReplace === 0 ? 10 : 0, opacity: tempReplace === 0 ? [0.5,0.5,0.5,0] : 0 }}
            transition={{ duration: 0.6, from: -20 }}
          >
            <Typography fontSize={24} sx={{ userSelect: "none" }}>
              -${bal}K
            </Typography>
          </motion.div>
        </Box>
      </Stack>
      { menuState === 1 &&
        <CreateRoomPage />
      }
    </Box>
  );
}