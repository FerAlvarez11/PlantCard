import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";
import "../App.css";
import { nanoid } from 'nanoid';

function AddPlant() {

     
    const today = Date.now();

    const [plant, setPlant] = useState({
        id: nanoid(),
        plantName: "",
        wateringTime: "Every day",
        frequencyToWater: 86400000 ,
        notes: [],
        lastWaterDate: today,
        avatarId:"plant-2.png"
    });

    var carousselImages =[
        {img:'plant-1.png', title:"3. Choose a picture"}, 
        {img:'plant-2.png', title:"3. Choose a picture"}, 
        {img:'plant-3.png', title:"3. Choose a picture"}, 
        {img:'plant-4.png', title:"3. Choose a picture"},
        {img:'plant-5.png', title:"3. Choose a picture"}, 
        {img:'plant-6.png', title:"3. Choose a picture"}, 
        {img:'plant-7.png', title:"3. Choose a picture"}, 
        {img:'plant-8.png', title:"3. Choose a picture"},
        {img:'plant-9.png', title:"3. Choose a picture"}, 
        {img:'plant-10.png', title:"3. Choose a picture"}, 
        {img:'plant-11.png', title:"3. Choose a picture"}, 
        {img:'plant-12.png', title:"3. Choose a picture"},
        {img:'plant-13.png', title:"3. Choose a picture"}, 
        {img:'plant-14.png', title:"3. Choose a picture"}, 
        {img:'plant-15.png', title:"3. Choose a picture"}, 
        {img:'plant-16.png', title:"3. Choose a picture"},
        {img:'plant-17.png', title:"3. Choose a picture"}, 
        {img:'plant-18.png', title:"3. Choose a picture"}, 
        {img:'plant-19.png', title:"3. Choose a picture"},
        {img:'plant-20.png', title:"3. Choose a picture"}

    ];     

    const navigate = useNavigate();

    const isButtonSubmitEnable = !plant.plantName || !plant.wateringTime;
 
    function handlePlantName(e) {
        setPlant({
            ...plant,
            plantName: e.target.value ,
            id: nanoid()           
        });
    }

    const sayHello = (waterFrequency) => {
        let frequencyToWater = plant.frequencyToWater;
        frequencyToWater = 86400000 ;

        if(waterFrequency === "Every day"){
            frequencyToWater = 86400000 ;
        } else if (waterFrequency === "Every three days"){
            frequencyToWater = 259200000;
        } else if (waterFrequency === "Once a week"){
            frequencyToWater = 604800000;
        } else if (waterFrequency === "Every two weeks"){
            frequencyToWater = 1209600000;
        } else if (waterFrequency === "Once a month"){
            frequencyToWater = 2629743833.3;
        }

        setPlant({
            ...plant,
            wateringTime: waterFrequency,
            lastWaterDate: today,
            frequencyToWater: frequencyToWater
        });     
      };

    
    function handleNotes(e) {
        setPlant({
            ...plant,
            notes: [e.target.value]
   
        });        
    } 
    
    const handleOnSubmit = () => {
        const jsonPlants = localStorage.getItem('plants');
        const plants = JSON.parse(jsonPlants);
        if(plants === null){
            window.localStorage.setItem('plants', JSON.stringify([plant]));
        } else {
            plants.push(plant);
            window.localStorage.setItem('plants', JSON.stringify(plants));
        }
        navigate("/plant-list");        
    };

    const handleAvatar = (currentSlide) => {
        setPlant({
            ...plant,
            avatarId: carousselImages[currentSlide].img
        });        
    } 
    
    return (
        <div className="hero has-background-primary is-fullheight">
            <div className="hero-head">
                <div className="logo-centered mt-5" style={{maxWidth: "325px"}}><img src='logo-black.png' alt="Logo" /></div>     
                {/* <div className="title has-text-centered has-text-white">Adding a new plant to your collection?</div>
                <div className="subtitle has-text-centered has-text-white">Let's track your plants watering times</div> */}
            </div>
            <div className="hero-body pt-0" style={{background: "1200px"}}>
                <div className="container" style={{maxWidth: "1200px"}}>
                    <div className="columns is-vcentered is-8-widescreen">
                        <div className="column" style={{maxWidth: "500px"}}>
                            <label 
                                className="label mt-5 is-size-4 is-dark-green"
                                htmlFor="username">1. What is your plant's name?
                            </label>
                            <input 
                                className="input is-large"
                                id="plant-name" 
                                placeholder="Write a name for your plant"
                                value={plant.plantName} 
                                onChange={handlePlantName}
                                required
                                type="text"
                            />
                            <label 
                                className="label is-size-4 is-dark-green mt-5"
                                htmlFor="username">2. How often does your plant need to be watered?
                            </label>
                            <div className="column has-text-centered">
                                <button className={`button is-rounded is-wide mt-4 ${plant.wateringTime === "Every day" ? "is-link" : ""}`} onClick={() => { sayHello("Every day"); }}>Every day</button>
                                <button className={`button is-rounded is-wide mt-4 ${plant.wateringTime === "Every three days" ? "is-link" : ""}`} onClick={() => { sayHello("Every three days"); }}>Every three days</button>
                                <button className={`button is-rounded is-wide mt-4 ${plant.wateringTime === "Once a week" ? "is-link" : ""}`} onClick={() => { sayHello("Once a week"); }}>Once a week</button> 
                                <button className={`button is-rounded is-wide mt-4 ${plant.wateringTime === "Every two weeks" ? "is-link" : ""}`} onClick={() => { sayHello("Every two weeks"); }}>Every two weeks</button>
                                <button className={`button is-rounded is-wide mt-4 ${plant.wateringTime === "Once a month" ? "is-link" : ""}`} onClick={() => { sayHello("Once a month"); }}>Once a month</button> 
                            </div>                   
                        </div>
                        <div className="column" style={{maxWidth: "200px"}}></div>   
                        <div className="column" style={{maxWidth: "500px",  float: "right"}}>
                            <div className=""> 
                                <Carousel carrouselData={carousselImages} handleAvatar={handleAvatar}/>
                            </div>
                        </div>
                    </div>
                    <div className="has-text-centered mt-4">
                        <button className="button is-warning is-rounded is-large mb-5 mt-5" style={{border: "1px solid #4c4329"}} type="submit" disabled={isButtonSubmitEnable} onClick={handleOnSubmit}>Submit</button>
                    </div>
                </div>
            </div>
           
        </div>
    );
}
  
  export default AddPlant;
  