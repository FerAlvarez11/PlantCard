import Plant from "./plant";
import {Link} from "react-router-dom";


function PlantList({ plants }) {    
    return (
        <div className="container">  
            <div className="columns">
                <div className="column"></div>
                <div className="column is-half">            
                    <div className="mt-2 has-text-centered"><img src='small-logo.png' alt="Hi" /></div>
                    <div className="has-text-centered">
                        <Link to="/add-plant">
                            <button className="m-4 button is-warning is-light">Add Plant</button>
                        </Link>
                    </div>

                    {plants.map((plant, i) => 
                        <Plant
                            key={`plant_${i}`}
                            id={plant.id}
                            plantName={plant.plantName}
                            wateringTime={plant.wateringTime}
                            frequencyToWaterInSeconds={plant.frequencyToWaterInSeconds}
                            lastWaterDate={plant.lastWaterDate}                            
                        />
                    )}
                </div>

                <div className="column"></div>
            </div>
        </div>
    );
}
  
  export default PlantList;
  