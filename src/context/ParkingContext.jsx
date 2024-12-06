import React, { createContext, useReducer } from "react";

const ParkingContext = createContext();

const initialState = {
  parkingLots: [],
  // other state properties
};

const parkingReducer = (state, action) => {
  switch (action.type) {
    case "SET_PARKING_LOTS":
      return {
        ...state,
        parkingLots: action.payload,
      };
    // other cases
    default:
      return state;
  }
};

const ParkingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(parkingReducer, initialState);

  return (
    <ParkingContext.Provider value={{ state, dispatch }}>
      {children}
    </ParkingContext.Provider>
  );
};

export { ParkingContext, ParkingProvider };
