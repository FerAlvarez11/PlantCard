import Plant from "./plant";
import AddPlant from "./addPlant";


function PlantList({ plants, handleAddPlant }) {
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
        
        <AddPlant handleAddPlant={handleAddPlant}/>

      </div>
    );
}
  
  export default PlantList;
  