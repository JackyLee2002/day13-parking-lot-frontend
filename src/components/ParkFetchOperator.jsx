import React, { useState, useContext } from "react";
import { ParkingContext } from "../context/ParkingContext";
import { TextField, Button, Grid, Box, Typography } from "@mui/material";

const ParkFetchOperator = () => {
  const { dispatch } = useContext(ParkingContext);
  const [plateNumber, setPlateNumber] = useState("");
  const [parkingType, setParkingType] = useState("Standard");

  const handlePlateNumberChange = (e) => {
    const value = e.target.value.toUpperCase();
    setPlateNumber(value);
  };

  const handleParkingTypeChange = (e) => {
    setParkingType(e.target.value);
  };

  const validatePlateNumber = (plate) => {
    const regex = /^[A-Z]{2}-\d{4}$/;
    return regex.test(plate);
  };

  const handlePark = () => {
    if (!plateNumber || !validatePlateNumber(plateNumber)) {
      alert("Invalid or empty license plate number.");
      return;
    }
    dispatch({ type: "PARK_CAR", payload: { plateNumber, parkingType } });
  };

  const handleFetch = () => {
    if (!plateNumber || !validatePlateNumber(plateNumber)) {
      alert("Invalid or empty license plate number.");
      return;
    }
    dispatch({ type: "FETCH_CAR", payload: { plateNumber } });
  };

  return (
    <Box
      sx={{
        p: 3,
        maxWidth: 1200,
        mx: "auto",
        mt: 5,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={3}>
          <TextField
            fullWidth
            label="Plate Number"
            value={plateNumber}
            onChange={handlePlateNumberChange}
            placeholder="Enter plate number (e.g., AB-1234)"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            label="Parking Type"
            value={parkingType}
            onChange={handleParkingTypeChange}
            variant="outlined"
            select
            SelectProps={{
              native: true,
            }}
          >
            <option value="Standard">Standard</option>
            <option value="VIP">VIP</option>
            <option value="Handicapped">Handicapped</option>
          </TextField>
        </Grid>
        <Grid item xs={3}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handlePark}
          >
            Park
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            onClick={handleFetch}
          >
            Fetch
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ParkFetchOperator;
