import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";
import "../App.css";
import { nanoid } from 'nanoid';

function AddPlant() {

    const [plant, setPlant] = useState({
        id: nanoid(),
        plantName: "",
        wateringTime: "",
        frequencyToWater: null,
        notes: [""],
        lastWaterDate: ""
    });

    var carousselImages =[
        {img:'plant-1.png'}, 
        {img:'plant-2.png'}, 
        {img:'plant-3.png'}, 
        {img:'plant-4.png'}
    ];            
    const navigate = useNavigate();
 
    const today = Date.now();

    const isButtonSubmitEnable = !plant.plantName || !plant.wateringTime;
 
    function handlePlantName(e) {
        setPlant({
            ...plant,
            plantName: e.target.value ,
            id: nanoid()           
        });
    }

    function handleWateringTime(e) {
        let frequencyToWater = plant.frequencyToWater;
        
        if(e.target.value === "Every day"){
            frequencyToWater = 30000;
        } else if (e.target.value === "Every three days"){
            frequencyToWater = 259200000;
        } else {
            frequencyToWater = 604800000;
        }

        setPlant({
            ...plant,
            wateringTime: e.target.value,
            lastWaterDate: today,

            frequencyToWater: frequencyToWater
        }); 
        
    }
    
    function handleNotes(e) {
        // let toPush = e.target.value;
        // let plantCopy = {...plant};
        // plantCopy.notes.push(toPush);
        setPlant({
            ...plant,
            notes: [e.target.value]     
        });
        
    }    
    
    const handleOnSubmit = () => {
        const jsonPlants = localStorage.getItem('plants');
        const plants = JSON.parse(jsonPlants);
        plants.push(plant);
        window.localStorage.setItem('plants', JSON.stringify(plants))
        navigate("/plant-list");        
    };
    
    return (
        <div className="mt-6">
            <div className="has-text-centered">
                <div className=""><img src='logo-black.png' alt="Hi" /></div>
            </div>
            <div className="columns is-centered m-5">           
                <div className="column">
                    <article className="message height-width-full is-primary">
                        <p className="message-header">1. Select a name for your plant</p>
                        <div className="message-body">
                            <div className="control">
                                <label 
                                    className="label mt-5 is-size-6"
                                    htmlFor="username">What is your plant's name?
                                </label>
                                <input 
                                    className="input is-rounded"
                                    id="plant-name" 
                                    placeholder="Write a name for your plant"
                                    value={plant.plantName} 
                                    onChange={handlePlantName}
                                    required
                                    type="text"
                                />
                                <label className="label mt-5 mb-0" htmlFor="notes">Write some notes</label><p className="help mt-0">(Optional)</p>
        
                                <textarea 
                                    className="textarea"
                                    id="notes" 
                                    placeholder="Write some notes about your plant" 
                                    value={plant.notes} 
                                    onChange={handleNotes}
                                />
                            </div>
                        </div>
                    </article>
                </div>
                <div className="column">
                    <article className="message height-width-full is-primary">
                        <p className="message-header">2. Select a watering time</p>
                        <div className="message-body">
                            <div className="control">
                                <label 
                                    className="label m-5 is-size-6"
                                    htmlFor="username">How often do your plant needs 
                                    to be watered?
                                </label>
                                <label className="radio m-5" htmlFor="everyday">
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
                
                                <label className="radio m-5" htmlFor="everythreedays">
                                    <input 
                                        className="m-1 "
                                        type="radio" 
                                        id="everythreedays" 
                                        name="amount" 
                                        value="Every three days" 
                                        onChange={handleWateringTime}
                                    />
                                    Every three days
                                </label><br/>    
                
                                <label className="radio m-5" htmlFor="onceaweek">
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
                        </div>
                    </article>
                </div>
                <div className="column">
                    <article className="message height-width-full is-primary">
                        <p className="message-header">3. Choose a picture</p>
                        <div className="message-body">
                            <Carousel carrouselData={carousselImages}/>
                        </div>
                    </article>
                </div>
            </div>
            <div className="has-text-centered mt-4">
                <button className="button is-warning is-rounded is-large" type="submit" disabled={isButtonSubmitEnable} onClick={handleOnSubmit}>Submit</button>
            </div>
        </div>
    );
}
  
  export default AddPlant;
  