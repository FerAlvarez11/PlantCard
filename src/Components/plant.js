import React from "react";
import { useState, useEffect } from "react";
import WateringTime from "./wateringTime";


function Plant({ plantName, wateringTime, lastWaterDate, frequencyToWaterInSeconds }) {
    const date = Math.floor(Date.now() / 1000);

    const [actualDateState, setActualDateState] = useState(date);

    useEffect(() => {
        setInterval(() => setActualDateState(Math.floor(Date.now() / 1000)), 300);
    }, []);

    

    const actualDate = actualDateState;
    const dateToWater = lastWaterDate + frequencyToWaterInSeconds;
    const diffBetwenActualAndCreationDate = actualDate - lastWaterDate;
    const percentage =  diffBetwenActualAndCreationDate * 100 / frequencyToWaterInSeconds;
    const percentageInverted = 100 - percentage / 100 * 100;
    const percentageInteger = Math.trunc(percentageInverted);

    return (
        <div className="container">  
          <h1>Creation date is {lastWaterDate}</h1>
          <h1>actual date is: {actualDate}</h1>
          <h1>frequency to water in seconds: {frequencyToWaterInSeconds}</h1>
          <h1>time to water : {dateToWater}</h1>          
          <h1>percentage is : {percentage}</h1>
          <h1>{percentageInteger}</h1>
          <h1>difference is {diffBetwenActualAndCreationDate}</h1>

            <article className="media box m-4">
                <figure className="media-left">
                    <p className="image is-64x64">
                    <img src='avatar.png' alt="Hi" />
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content px-4">
                        <strong className="mb-3 is-size-3">{plantName}</strong><br/>   
                        <div className="">
                            <small>Watering time: {wateringTime}</small>
                        </div>
                        {/* <progress className="progress is-primary mt-2 mb-0" value={percentageInteger} max="100">`${percentageInteger}%`</progress> */}
                        <WateringTime percentage={percentageInteger}/>
                        <p className="tag is-primary is-light is-large mt-3 has-background-success-light">3 days to water</p>
                    </div>
                        
                    <nav className="level px-4">
                        <div className="level-right">
                            <button className=" level-right button button is-text has-text-info">View notes</button>                         
                        </div>
                        <div className="level-left">
                            <button className=" level-right button is-primary is-outlined">Water</button>                         
                        </div>
                    </nav>
                </div>                  
            </article>            
        </div>

    );
  }
  
  export default Plant;
  