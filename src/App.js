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
            frequencyToWater: plant.frequencyToWater,
            notes: plant.notes,
            lastWaterDate: plant.lastWaterDate
        };

        const newPlants = [...plants, newPlant];

        setPlants(newPlants);
    }

    const restartTimePlant = (id) => {
        const index = plants.findIndex(object => {
            return object.id === id;
        });

        if(index !== -1){                 
            let plantsCopy = [...plants];
            plantsCopy[index].lastWaterDate = Date.now();   
            setPlants(plantsCopy);        
        }
    }

    return (    
        <div className="App">   
            <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/add-plant" element={<AddPlant handleAddPlant={addPlant}/>}/>
            <Route path="/plant-list" element={<PlantList plants={plants} restartTimePlant={restartTimePlant}/>}/>
            </Routes>    
        </div>
    );
}

export default App;
