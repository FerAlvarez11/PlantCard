import Plant from "./Plant";
import {Link} from "react-router-dom";
import "../App.css";
import { useState, useEffect } from "react";


function PlantList() {   
    const data = localStorage.getItem('plants');

    const [plants, setPlants] = useState(JSON.parse(data));
    console.log(typeof plants)

    
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
        <div className="hero">   
            <div className="hero-head has-background-primary has-text-centered">
                <div className="logo-centered mt-5" style={{maxWidth:"325px"}}><img src='logo.png' alt="Logo" /></div>  
                <Link to="/add-plant">
                    <button className="button is-warning is-rounded is-medium mb-3">Add Plant</button>
                </Link>   
            </div>
            <div className="hero-body">
                <div className="container">         
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
                                avatar={`images/${plant.avatarId}`}                       
                            />
                        )}
                    </div>
                </div>
            </div>   
        </div>
    );
}
  
  export default PlantList;
  