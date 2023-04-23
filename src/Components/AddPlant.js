import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Carousel from "./Carousel";
import "../App.css";
import { nanoid } from 'nanoid';

function AddPlant() {     
    const data = localStorage.getItem('plants');
    const dataArray = JSON.parse(data);

    const [buttonPlantList, setbuttonPlantList] = useState(false);

    useEffect(() => {
        if(dataArray !== null){
            if(dataArray.length > 0){
                setbuttonPlantList(true);
            };
        };       
    }, [dataArray]);    

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
        {img:'plant-1.png'}, 
        {img:'plant-2.png'}, 
        {img:'plant-3.png'}, 
        {img:'plant-4.png'},
        {img:'plant-5.png'}, 
        {img:'plant-6.png'}, 
        {img:'plant-7.png'}, 
        {img:'plant-8.png'},
        {img:'plant-9.png'}, 
        {img:'plant-10.png'}, 
        {img:'plant-11.png'}, 
        {img:'plant-12.png'},
        {img:'plant-13.png'}, 
        {img:'plant-14.png'}, 
        {img:'plant-15.png'}, 
        {img:'plant-16.png'},
        {img:'plant-17.png'}, 
        {img:'plant-18.png'}, 
        {img:'plant-19.png'},
        {img:'plant-20.png'}
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

    const handleWateringTime = (e) => {
        let frequencyToWater = plant.frequencyToWater;
        frequencyToWater = 86400000 ;

        if(e.target.value === "Every day"){
            frequencyToWater = 86400000 ;
        } else if (e.target.value === "Every three days"){
            frequencyToWater = 259200000;
        } else if (e.target.value === "Once a week"){
            frequencyToWater = 604800000;
        } else if (e.target.value === "Every two weeks"){
            frequencyToWater = 1209600000;
        } else if (e.target.value === "Once a month"){
            frequencyToWater = 2629743833.3;
        }

        setPlant({
            ...plant,
            wateringTime: e.target.value,
            lastWaterDate: today,
            frequencyToWater: frequencyToWater
        });     
      };

    
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
                <Link to="/plant-list">
                    <div className="logo-centered mt-5" style={{maxWidth:"325px"}}><img src='/PlantCard/logo.png' alt="Logo" /></div> 
                </Link>
            </div>
            <div className="hero-body pt-0" style={{background: "1200px"}}>
                <div className="container" style={{maxWidth: "1200px"}}>
                    <div className="columns is-vcentered is-8-widescreen">
                        <div className="column" style={{maxWidth: "500px"}}>
                            {buttonPlantList && ( 
                                <Link to="/plant-list">
                                     <button className="button is-primary">
                                        <span className="icon">
                                        <i className="fa-solid fa-arrow-left"></i>
                                        </span>
                                        <span>Back to your plants list</span>
                                    </button>
                                </Link>
                            )}    
                            <label 
                                className="label mt-5 is-size-4"
                                htmlFor="username">1. What is your plant's name?
                            </label>
                            <input 
                                className="input is-large is-focused"
                                id="plant-name" 
                                placeholder="Write a name for your plant"
                                value={plant.plantName} 
                                onChange={handlePlantName}
                                maxLength={26}
                                required
                                type="text"
                            />
                            <label 
                                className="label is-size-4 mt-5"
                                htmlFor="username">2. How often does your plant need to be watered?
                            </label>
                            <div className="column has-text-centered">                                
                                <div className="select is-large">
                                <select className="is-focused" onChange={handleWateringTime}>
                                    <option>Every day</option>
                                    <option >Every three days</option>
                                    <option>Once a week</option>
                                    <option>Every two weeks</option>
                                    <option>Once a month</option>
                                </select>
                                </div>
                            </div>                   
                        </div>
                        <div className="column" style={{maxWidth: "200px"}}></div>   
                        <div className="column" style={{maxWidth: "500px",  float: "right"}}>
                            <div className=""> 
                                <Carousel carrouselData={carousselImages} handleAvatar={handleAvatar}/>
                                <p className="has-text-centered title is-size-4">3. Choose a picture</p>
                            </div>
                        </div>
                    </div>
                    <div className="has-text-centered mt-4">
                        <button className="button is-warning is-rounded is-large mb-5 mt-4"  type="submit" disabled={isButtonSubmitEnable} onClick={handleOnSubmit}>Submit</button>
                    </div>
                </div>
            </div>
           
        </div>
    );
}
  
  export default AddPlant;
  