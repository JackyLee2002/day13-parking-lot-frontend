import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const getParkingLots = async () => {
  try {
    const response = await api.get("/parking-lots");
    return response.data;
  } catch (error) {
    console.error("Error fetching parking lots:", error);
    throw error;
  }
};

export const parkCar = async (plateNumber, parkingBoyStrategy) => {
  try {
    const response = await api.post("/park", {
      plateNumber,
      parkingBoyStrategy,
    });
    return response.data;
  } catch (error) {
    console.error("Error parking car:", error);
    throw error;
  }
};

export const fetchCar = async (plateNumber) => {
  try {
    const response = await api.post("/fetch", {
      plateNumber,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching car:", error);
    throw error;
  }
};
