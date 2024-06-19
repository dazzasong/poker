import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import io from "socket.io-client";
import wiiConfirm from "./assets/audio/wii-confirm.mp3";

const socket = io.connect("http://localhost:3001");

const buttonClickSfx = new Audio(wiiConfirm);

export default function CreateRoomPage() {
  const [roomID, setRoomID] = React.useState("");
  const [receivedMessage, setReceivedMessage] = React.useState("");
  
  const sendMessage = (message) => {
    socket.emit("send_message", { message, roomID });
  };

  React.useEffect(() => {
    socket.on("receive_message", (data) => {
      setReceivedMessage(data.message);
    });
  }, [socket]);
  
  const createRoom = () => {
    if (roomID !== "") {
      setRoomID(roomID);
      buttonClickSfx.play();
    }
  }

  return (
    <Stack height="100vh">
      <Typography>
        Create Room
      </Typography>
    </Stack>
  )
}