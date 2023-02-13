import Plant from "./Plant";
import {Link} from "react-router-dom";
import "../App.css";
import { useState, useEffect } from "react";


function PlantList() {     
    
    const data = localStorage.getItem('plants');

    const [plants, setPlants] = useState(JSON.parse(data));
    
    const deletePlant = (id) => {
        const index = plants.findIndex(object => {
            return object.id === id;
        });

        if(index !== -1){                 
            let plantsCopy = [...plants];
            plantsCopy.splice(index, 1);  
            setPlants(plantsCopy);        
        }  
    }

    const restartTimePlant = (plantsRestarted) => {        
        setPlants(plantsRestarted);     
    }   


    useEffect(() => {
        window.localStorage.setItem('plants', JSON.stringify(plants))
    }, [plants]);

    return (
        <div className="container">   
            <div className="mt-2 has-text-centered"><img src='small-logo.png' alt="Hi" /></div>
            <div className="has-text-centered">
                <Link to="/add-plant">
                    <button className="button is-warning is-rounded is-large mb-5">Add Plant</button>
                </Link>
            </div>

            <div className="columns is-centered is-multiline">
                {plants.map((plant, i) => 
                    <Plant
                        plants= {plants}
                        key={`plant_${i}`}
                        id={plant.id}
                        plantName={plant.plantName}
                        wateringTime={plant.wateringTime}
                        frequencyToWater={plant.frequencyToWater}
                        lastWaterDate={plant.lastWaterDate}   
                        restartTimePlant={restartTimePlant}  
                        deletePlant={deletePlant}   
                        notes={plant.notes}                        
                    />
                )}
            </div>                   
        </div>
    );
}
  
  export default PlantList;
  