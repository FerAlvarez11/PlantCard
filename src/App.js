import { useState } from "react";
import PlantList from "./Components/plantList";
import { nanoid } from 'nanoid';
import { Routes, Route } from "react-router-dom";
import AddPlant from "./Components/addPlant";
import Homepage from "./Components/Homepage";
import "./App.css";
import "bulma/css/bulma.min.css"



function App() {    
  const [plants, setPlants] = useState([]);

  const addPlant = (plant) => {
    const newPlant = {
      id: nanoid(),
      plantName: plant.plantName,
      wateringTime: plant.wateringTime,
      frequencyToWaterInSeconds: plant.frequencyToWaterInSeconds,
      notes: plant.notes,
      lastWaterDate : plant.lastWaterDate
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
