import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const ParkingLot = ({ parkingLot }) => {
  return (
    <Box
      sx={{
        padding: 2,
        width: "100%",
        border: "1px solid lightblue",
        margin: 1,
      }}
    >
      <Typography variant="h6">{parkingLot.name}</Typography>
      <Typography variant="body1">Capacity: {parkingLot.capacity}</Typography>
      <Grid
        container
        spacing={0}
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {Array.from(Array(parkingLot.capacity), (_, index) => {
          const ticket = parkingLot.tickets.find(
            (ticket) => ticket.position === index + 1
          );
          return (
            <Box
              key={index + 1}
              sx={{
                border: "1px solid lightblue",
                textAlign: "center",
                margin: 0,
                padding: "2px",
                boxSizing: "border-box",
                "&:nth-of-type(3n + 1)": {
                  borderLeft: "none",
                },
                "&:nth-of-type(3n)": {
                  borderRight: "none",
                },
                "&:nth-of-type(-n+3)": {
                  borderTop: "none",
                },
                "&:nth-last-of-type(-n+3)": {
                  borderBottom: "none",
                },
              }}
            >
              {ticket ? ticket.plateNumber : "X"}
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ParkingLot;
