import React from "react";
import { useState, useEffect } from "react";
import WateringTime from "./WateringTime";
import NotesList from "./NotesList";
import "../App.css";


function Plant({ plantName, wateringTime, lastWaterDate, frequencyToWater, restartTimePlant, id, deletePlant, addNote, notes }) {     
    const date = Date.now();

    const [actualDateState, setActualDateState] = useState(date);

    useEffect(() => {
        setInterval(() => setActualDateState(Date.now()), 600000);
    }, []);    

    const actualDate = actualDateState;
    const dateToWater = lastWaterDate + frequencyToWater;
    const diffBetwenActualAndCreationDate = actualDate - lastWaterDate;
    const percentage =  diffBetwenActualAndCreationDate * 100 / frequencyToWater;
    const percentageInverted = 100 - percentage / 100 * 100;
    const percentageInteger = Math.trunc(percentageInverted);
 
    const handlRestartTimePlant = () => {
        restartTimePlant(id);
    };
    
    const handleDeletePlant = () => {
        deletePlant(id);
    };

    return (        
        <div className="column max-width">  
            <article className="box border-color mb-3">
                <nav className="level mb-1 is-mobile">
                    <div className="level-left">
                        <div className="level-item">
                            <strong className="mb-1 is-size-3">{plantName}</strong><br/>
                        </div>
                    </div>
                    <div className="level-right">
                        <div className="level-item">
                            <button onClick={handleDeletePlant} className="delete"></button>                        
                        </div>                       
                    </div>
                </nav>
                <div className="media">
                    <div className="media-right mr-4">
                        <div className="image is-96x96">
                            <img src='plant-1.png' alt="Hi" />
                        </div>                
                    </div>
                    <div className="media-content">
                        <small>Watering time: {wateringTime}</small>
                        <WateringTime percentage={percentageInteger} dateToWater={dateToWater} actualDate={actualDate}/> 
                    </div>
                </div>
                <nav className="level mt-3 is-mobile">
                    <div className="level-item">
                        <button onClick={handlRestartTimePlant} className="button is-primary is-outlined is-rounded">Water now</button>
                    </div>
                    <div className="level-item">
                        <div><NotesList id={id} addNote={addNote} notes={notes}/></div>                
                    </div>
                </nav> 
            </article>            
        </div>

    );
  }
  
  export default Plant;
  