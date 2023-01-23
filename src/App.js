import { useState } from "react";
import PlantList from "./Components/plantList";
import { nanoid } from 'nanoid';
import { Routes, Route } from "react-router-dom";
import AddPlant from "./Components/addPlant";
import Homepage from "./Components/Homepage";
import "./App.css";
import "bulma/css/bulma.min.css"



function App() {
  
  const [plants, setPlants] = useState([{
    id: nanoid(),
    plantName: "Mart",
    wateringTime: "Every day",
    notes: "notes"
  }])

  const addPlant = (plant) => {

    const newPlant = {
      id: nanoid(),
      plantName: plant.plantName,
      wateringTime: plant.wateringTime,
      notes: plant.notes
    };

    const newPlants = [...plants, newPlant];
    setPlants(newPlants);
  }

  return (
    
    <div className="App">
   
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/add-plant" element={<AddPlant handleAddPlant={addPlant}/>}/>
          <Route path="/plant-list" element={<PlantList plants={plants}/>}/>
        </Routes>
      

    </div>
  );
}

export default App;
