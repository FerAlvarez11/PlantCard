import Plant from "./Plant";
import {Link} from "react-router-dom";
import "../App.css";


function PlantList({ plants, restartTimePlant, deletePlant, addNote }) {    

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
                        key={`plant_${i}`}
                        id={plant.id}
                        plantName={plant.plantName}
                        wateringTime={plant.wateringTime}
                        frequencyToWater={plant.frequencyToWater}
                        lastWaterDate={plant.lastWaterDate}   
                        restartTimePlant={restartTimePlant}  
                        deletePlant={deletePlant}   
                        notes={plant.notes}    
                        addNote={addNote}     
                    />
                )}
            </div>                   
        </div>
    );
}
  
  export default PlantList;
  