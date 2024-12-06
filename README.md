### 
Please create a react app that make use of useContext together with useContext for global state management, 


### Initial Load parking lot status
Change whereever appropriate so that the app will call /parking-lots and update the result using the redux dispatch, if the dispatch doesnt have a action to set the parking lot status, please create one

useEffect(() => { fetch("http://localhost:8080/parking-lots") .then((response) => response.json()) .then((data) => { dispatch({ type: "？", payload: data }); }) .catch((error) => console.error("Error fetching parking lots:", error)); }, [dispatch]);


####
now use MUI to make the Park Fetch Operator looks better with proper spacing between each component and equal height, add extra styling as you see fit for a Parking Lot management application UI. It needs to be all in one row with proper sizing, not too big


### API
Now write a api.js that will utilize axios library to perform API calls
the base url will be localhost:8080

There will be 3 main APIS
1. /parking-lots: which will be used to get all parking lots
2. /park: (Body: {
    "plateNumber": String,
    "parkingBoyStrategy": String
})
3. /fetch: (Body:  {
    "plateNumber": String,
})

### 
I have a React component that renders a list of parking lots, each with a grid of parking slots. I want each parking lot to have a 3 by N grid (each row has 3 slots), where each slot represents a parking car at that position. I want there to be borders between each slot but not on the outside.
Make it so that its component-based, I want ParkingLot Group to render a list of ParkingLot component each with their name and grid.
Make the css inline within Parking Lot using MUI to achieve that goal

Now make it so that the parking Lots are flexed horizontally instead of vertically

###
make it so that each of the 3 parking lots in the parking lots group take 30% of the width and within each parking lot, make sure each slot can fit the text
Change it so that after park or fetch, call the get /parking-lots api again to update the new UI states