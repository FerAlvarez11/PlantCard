import React from "react";
import { useState, useEffect } from "react";
import WateringTime from "./wateringTime";
import NotesList from "./notesList";


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
        <div className="container">  
          {/* <h1>Creation date is {lastWaterDate}</h1>
          <h1>actual date is: {actualDate}</h1>
          <h1>frequency to water in seconds: {frequencyToWater}</h1>
          <h1>time to water : {dateToWater}</h1>          
          <h1>percentage is : {percentage}</h1>
          <h1>{percentageInteger}</h1>
          <h1>difference is {diffBetwenActualAndCreationDate}</h1> */}

            <article className="media box mb-3">
                <figure className="media-left">
                    <p className="image is-72x72">
                        <img src='avatar.png' alt="Hi" />
                        <button onClick={handlRestartTimePlant} className=" mt-4 level-right button is-primary is-outlined">Water</button>    
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content px-4">
                        <strong className="mb-1 is-size-3">{plantName}</strong><br/>   
                        <div className="">
                            <small>Watering time: {wateringTime}</small>
                        </div>
                        <WateringTime percentage={percentageInteger} dateToWater={dateToWater} actualDate={actualDate}/>                        
                    </div>

                    <nav><NotesList id={id} addNote={addNote} notes={notes}/></nav>                      
                </div>  
                <div className="media-right">
                        <button onClick={handleDeletePlant} className="delete"></button>
                </div>        
          
            </article>            
        </div>

    );
  }
  
  export default Plant;
  