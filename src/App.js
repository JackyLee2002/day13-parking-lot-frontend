import React, { useContext, useEffect } from "react";
import { ParkingContext, ParkingProvider } from "./context/ParkingContext";
import ParkingLotGroup from "./components/ParkingLotGroup";
import ParkFetchOperator from "./components/ParkFetchOperator";
import { getParkingLots } from "./api/api";

function App() {
  const { dispatch } = useContext(ParkingContext);

  useEffect(() => {
    const fetchParkingLots = async () => {
      try {
        const data = await getParkingLots();
        dispatch({ type: "SET_PARKING_LOTS", payload: data });
      } catch (error) {
        console.error("Error fetching parking lots:", error);
      }
    };

    fetchParkingLots();
  }, [dispatch]);

  return (
    <div className="App">
      <ParkFetchOperator />
      <ParkingLotGroup />
    </div>
  );
}

export default function AppWrapper() {
  return (
    <ParkingProvider>
      <App />
    </ParkingProvider>
  );
}
