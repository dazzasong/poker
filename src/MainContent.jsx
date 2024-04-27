import React from "react";
import { Stack, Typography } from "@mui/material";

export default function MainContent() {
  const [introEndState, setIntroEndState] = React.useState(0);
  const introEndColor = introEndState === 1 ? "error" : "success";
  return (
    <Stack bgcolor="black" alignItems="center">
      <Stack direction="row" sx={{userSelect: "none"}}>
        <Typography
          color="white"
          fontSize={30}
          fontWeight="bold"
        >
          Ready to..&nbsp;
        </Typography>
        <div
          onMouseEnter={() => setIntroEndState(1)}
          onMouseLeave={() => setIntroEndState(0)}
        >
          <Typography
            color={introEndColor}
            fontSize={30}
            fontWeight="bold"
          >
            {introEndState === 1 ? "LOSE" : "WIN"}?
          </Typography>
        </div>
      </Stack>
    </Stack>
  )
}