import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import io from "socket.io-client";
import wiiConfirm from "./assets/audio/wii-confirm.mp3";

const socket = io.connect("http://localhost:3001");

const buttonClickSfx = new Audio(wiiConfirm);

export default function JoinRoomPage() {
  const [roomID, setRoomID] = React.useState("");
  
  const sendMessage = (message) => {
    socket.emit("send_message", { message, roomID });
  };

  React.useEffect(() => {
    socket.on("receive_message", (data) => {
      setReceivedMessage(data.message);
    });
  }, [socket]);
  
  const joinRoom = () => {
    if (roomID !== "") {
      socket.emit("join_room", roomID);
      setRoomID(roomID);
      setInRoom(true);
      joinRoomSfx.play();
    }
  };

  return (
    <Stack height="100vh">
      <Typography>
        Join Room
      </Typography>
    </Stack>
  )
}