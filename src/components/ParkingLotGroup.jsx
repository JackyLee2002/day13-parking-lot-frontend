import React, { useContext } from "react";
import { ParkingContext } from "../context/ParkingContext";
import ParkingLot from "./ParkingLot";
import { Box } from "@mui/material";

const ParkingLotGroup = () => {
  const { state } = useContext(ParkingContext);
  const { parkingLots } = state;

  if (!parkingLots || parkingLots.length === 0) {
    return <div>No parking lots available</div>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center", // Center horizontally
        gap: 2,
        padding: "50px", // Add padding around the group
      }}
    >
      {parkingLots.map((parkingLot) => (
        <Box
          key={parkingLot.name}
          sx={{
            flex: "1 1 30%", // Each parking lot takes 30% of the width
            minWidth: "300px", // Minimum width to ensure responsiveness
            padding: "20px", // Add padding around each parking lot
            boxSizing: "border-box",
          }}
        >
          <ParkingLot parkingLot={parkingLot} />
        </Box>
      ))}
    </Box>
  );
};

export default ParkingLotGroup;
