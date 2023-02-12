import { useState } from "react";
import PlantList from "./Components/PlantList";
import { nanoid } from 'nanoid';
import { Routes, Route } from "react-router-dom";
import AddPlant from "./Components/AddPlant";
import Homepage from "./Components/Homepage";
import "./App.css";
import "bulma/css/bulma.min.css"


function App() {    
    const [plants, setPlants] = useState([]);

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

    const addNote = (id, note) => {
        const index = plants.findIndex(object => {
            return object.id === id;
        });

        if(index !== -1){                 
            let plantsCopy = [...plants];
            let plantToAddNote = plantsCopy[index].notes;

            plantToAddNote.push(note);

            setPlants(plantsCopy);   
        }    
    }

    return (    
        <div className="App">   
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/add-plant" element={<AddPlant/>}/>
                <Route path="/plant-list" element={<PlantList restartTimePlant={restartTimePlant} addNote={addNote}/>}/>
            </Routes>    
        </div>
    );
}

export default App;
