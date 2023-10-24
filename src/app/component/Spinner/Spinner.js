import * as React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
import Fade from "@mui/material";

export default function Spinner() {
  return (
    <React.Fragment>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center", background:"", margin: "10%"}}
      >

          <CircularProgress color="secondary" />

      </Box>


    </React.Fragment>
  );
}
