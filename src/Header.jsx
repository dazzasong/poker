import { Stack, Typography } from "@mui/material";
import cards from "./assets/cards.png"

export default function Header() {
  return (
    <Stack
      bgcolor="gold"
      height={80}
      direction="row"
      justifyContent="space-evenly"
      alignContent="center"
      sx={{
        userSelect: "none"
      }}
    >
      <img src={cards} alt="cards" />
      <Typography
        color="orange"
        fontSize={50}
        fontWeight="bold"
        fontFamily="cursive"
        sx={{
          textShadow: "4px 4px goldenrod"
        }}
      >
        Poker
      </Typography>
      <img src={cards} alt="cards" />
    </Stack>
  )
}