import { useState } from "react";
import { useNavigate } from "react-router-dom";


function AddPlant({ handleAddPlant }) {
    const [plant, setPlant] = useState({
        plantName: "",
        wateringTime: "",
        frequencyToWaterInSeconds: null,
        notes: "",
        lastWaterDate: ""
    });

    const navigate = useNavigate();

    const dateNow = Date.now();

    const today = Math.floor(dateNow / 1000);

    const isButtonSubmitEnable = !plant.plantName || !plant.wateringTime;
 
    function handlePlantName(e) {
        setPlant({
            ...plant,
            plantName: e.target.value
            
        });
    }

    function handleWateringTime(e) {
        let frequencyToWaterInSeconds = plant.frequencyToWaterInSeconds;
        
        if(e.target.value === "Every day"){
            frequencyToWaterInSeconds = 60;
        } 
            else if (e.target.value === "Every three days"){
                frequencyToWaterInSeconds = 259200;
            }   
                else{
                    frequencyToWaterInSeconds = 604800;
                }

        setPlant({
            ...plant,
            wateringTime: e.target.value,
            lastWaterDate: today,

            frequencyToWaterInSeconds: frequencyToWaterInSeconds
        }); 
        
    }
    
    function handleNotes(e) {
        setPlant({
            ...plant,
            notes: e.target.value
        });
        
    }
    
    
    const handleOnSubmit = () => {
        handleAddPlant(plant);
        navigate("/plant-list");
    };

    
    return (
        <div className="container content is-medium"> 
            <div className="columns">  
                <div className="column"></div>
                <div className="column box px-6 mt-5">
                    
                    <div className="mt-4 has-text-centered"><img src='small-logo.png' alt="Hi" /></div>

                    <div className="columns mt-6">
                        <div className="column is-two-thirds">
                            <h1 className="has-text-primary">Add a plant to your plant collection</h1>
                        </div>
                        <div className="column"> 
                            <div className="mt-2 has-text-centered"><img src='flat-icons-set-pot-plants-garden-flowers-herbs_1416-286.webp' alt="Hi" /></div>
                        </div>
                    </div>
                   
                    <div className="field mt-3">     
                        <label 
                            className="label mt-5 is-size-4"
                            htmlFor="username">What is your plant's name?
                        </label>
                        <div className="is-one-fifth">
                            <div className="control">
                                <input 
                                    className="input is-rounded"
                                    id="plant-name" 
                                    placeholder="Write a name for your plant"
                                    value={plant.plantName} 
                                    onChange={handlePlantName}
                                    required
                                    type="text"
                                />
                            </div>
                        </div>
                    </div>

                    <label className="label mt-4">How often do you normally water the plant?</label>
                        <div className="control">
                          
                                    <label className="radio" htmlFor="everyday">
                                        <input 
                                            className="m-1"
                                            type="radio" 
                                            id="everyday" 
                                            name="amount" 
                                            value="Every day" 
                                            onChange={handleWateringTime}
                                        />
                                        Every day
                                    </label><br/>
                 
                     
                                    <label className="radio" htmlFor="everythreedays">
                                        <input 
                                            className="m-1"
                                            type="radio" 
                                            id="everythreedays" 
                                            name="amount" 
                                            value="Every three days" 
                                            onChange={handleWateringTime}
                                        />
                                        Every three days
                                    </label>

                                    <br/>    
                        
                                    <label className="radio" htmlFor="onceaweek">
                                        <input 
                                            className="m-1"
                                            type="radio" 
                                            id="onceaweek" 
                                            name="amount" 
                                            value="Once a week" 
                                            onChange={handleWateringTime}
                                        />
                                        Once a week
                                    </label>                     
                        </div>

                    <label className="label mt-4 mb-0" htmlFor="notes">Write some notes</label><p className="help mt-0">(Optional)</p>
            
                    <textarea 
                        className="textarea"
                        id="notes" 
                        placeholder="Write some notes about your plant" 
                        value={plant.notes} 
                        onChange={handleNotes}
                    />
                    <div className="has-text-centered mt-4">
                        <button className="button is-primary is-large m-4 centered" type="submit" disabled={isButtonSubmitEnable} onClick={handleOnSubmit}>Submit</button>
                    </div>
                </div>
                <div className="column"></div>
            </div>

        </div>

    );
}
  
  export default AddPlant;
  