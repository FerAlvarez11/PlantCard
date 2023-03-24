import Plant from "./Plant";
import {Link} from "react-router-dom";
import "../App.css";
import { useState, useEffect } from "react";


function PlantList() {   
    const data = localStorage.getItem('plants');
    const dataArray = JSON.parse(data);

    const [plants, setPlants] = useState(JSON.parse(data));
    const [bannerWhenNoPlants, setBannerWhenNoPlants] = useState(false);
    const [amountOfPlants, setAmountOfPlants] = useState(dataArray.length)


    useEffect(() => {
        if(dataArray.length === 0){
            setBannerWhenNoPlants(true);
        };
    }, [dataArray]);    
   
    const deletePlant = (id) => {
        const index = plants.findIndex(object => {
            return object.id === id;
        });

        const AmountOfPlantsLessOne = amountOfPlants - 1;
        setAmountOfPlants(AmountOfPlantsLessOne)

        if(amountOfPlants === 1){
            setBannerWhenNoPlants(true);
        };  

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
                <div className="logo-centered mt-5" style={{maxWidth:"325px"}}><img src='/PlantCard/logo.png' alt="Logo" /></div> 
                 {bannerWhenNoPlants && ( 
                    <div>
                        <p className="subtitle is-size-2 mt-6 mb-6">
                            Oops! No plants here...
                        </p>
                        <p className="subtitle is-size-4 mt-3 mb-6">
                            Just a click away to start the journey
                        </p>
                    </div>
                 )}
                <Link to="/add-plant">
                    <button className="button is-warning is-rounded is-medium mb-3">Add Plant</button>
                </Link>   
            </div>
            <div className="hero-body">
                <div className="container"> 
            
                    <div className="columns is-centered is-multiline">
                        {bannerWhenNoPlants && ( 
                            <div>
                                <img src={"/PlantCard/images/plant-list-banner-photo.png"} className={"image is-fullwidth"} style={{maxWidth: "500px"}} alt="plant-avatar"/>
                            </div>
                        )}     

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
                                avatar={`/PlantCard/images/${plant.avatarId}`}                       
                            />
                        )}
                    </div>
                </div>
            </div>   
        </div>
    );
}
  
  export default PlantList;
  