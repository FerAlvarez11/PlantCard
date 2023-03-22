import React from "react";
import { useState, useEffect } from "react";
import WateringTime from "./WateringTime";
import "../App.css";
import NotesList from "./NotesList";


function Plant({ plants, plantName, wateringTime, lastWaterDate, frequencyToWater, restartTimePlant, id, deletePlant, notes, avatar }) {     
    const date = Date.now();

    const [actualDateState, setActualDateState] = useState(date);
    const [timeAnimation, setTimeAnimation] = useState(false);
    const [waterNowTextButton, setWaterNowTextButton] = useState('Water now');

    useEffect(() => {
        setInterval(() => setActualDateState(Date.now()), 6000000);
    }, []);    

    const [isNotesListOpen, setIsNotesListOpen] = useState(false);

    const actualDate = actualDateState;
    const dateToWater = lastWaterDate + frequencyToWater;
    const diffBetwenActualAndCreationDate = actualDate - lastWaterDate;
    const percentage =  diffBetwenActualAndCreationDate * 100 / frequencyToWater;
    const percentageInverted = 100 - percentage / 100 * 100;
    const percentageInteger = Math.trunc(percentageInverted);
 
    const handlRestartTimePlant = () => {
        const index = plants.findIndex(object => {
            return object.id === id;
        });

        if(index !== -1){                 
            let plantsCopy = [...plants];
            plantsCopy[index].lastWaterDate = Date.now();   
            restartTimePlant(plantsCopy); 
        };

        setTimeAnimation(true);
        setWaterNowTextButton("Watered!");
        setTimeout(() => setWaterNowTextButton("Water now"), 500);
    };

    useEffect(() => {
        if(timeAnimation === true){
            setTimeout(() => setTimeAnimation(false), 500);
        };
    }, [timeAnimation]);   
    
    const handleDeletePlant = () => {
        deletePlant(id);
    };

    const closeNotesButton = () => {
        setIsNotesListOpen(!isNotesListOpen)
    }

    return (        
        <div className="column max-width">  
            <article className="box mb-3 plant-box-min-width plant-box-min-height">
                <nav className="level mb-1 is-mobile">
                    <div className="level-left">
                        <div className="level-item">
                            <strong className="mb-1 is-size-4">{plantName}</strong><br/>
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
                            <img src={avatar} alt="Hi" />
                        </div>                
                    </div>
                    <div className="media-content">
                        <small className="tag"><i className={`fa-solid fa-droplet mr-1`}></i>{wateringTime}</small>
                        <WateringTime percentage={percentageInteger} dateToWater={dateToWater} actualDate={actualDate} buttonPressed={timeAnimation}/> 
                    </div>
                </div>
                <nav className="level mt-3 is-mobile">
                    <div className="level-item">
                        <button onClick={handlRestartTimePlant} className={`button is-outlined is-wide ${timeAnimation ? '' : 'primary'}  mt-2`}>
                            <span className="icon">
                                <i className={`progress ${timeAnimation ? 'fa-solid fa-check mr-2' : 'fa-solid fa-droplet'}`}></i>
                            </span>
                            <span>{waterNowTextButton}</span>
                        </button>
                    </div>
                    <div className="level-item">
                        <button onClick= {()=>setIsNotesListOpen(!isNotesListOpen)} className=" level-right button is-text has-text-info dropdown-menu2">View notes</button>  
                        {isNotesListOpen && (     
                            <NotesList notes={notes} id={id} notesOpen={closeNotesButton} plantName={plantName}/>
                        )}   
                    </div>
                </nav> 
            </article>            
        </div>
    );
  }
  
  export default Plant;
  