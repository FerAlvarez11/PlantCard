import Plant from "./plant";
import {Link} from "react-router-dom";


function PlantList({ plants }) {
    return (

      <div className="plant-list">  

        {plants.map((plant, i) => 
            <Plant
                key={`plant_${i}`}
                id={plant.id}
                plantName={plant.plantName}
                wateringTime={plant.wateringTime}
            />
        )}

    <Link className="centered button" to="/add-plant">Add Plant</Link>  
        
      </div>
    );
}
  
  export default PlantList;
  