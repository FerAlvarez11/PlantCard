import React from "react";
import { format } from 'date-fns';
import "../App.css";

function WateringTime({ percentage, dateToWater, actualDate, buttonPressed }) {
    let wateringTimeState;
    const hasPastTimeWarningMessage = actualDate >= dateToWater + 86400000;
    const dateObject = new Date(dateToWater);

    var isActive = buttonPressed;

    if(percentage > 0){
        wateringTimeState = (
            <span>     
                <progress className={`progress ${isActive ? 'waterTimeRestarted' : 'is-primary'}  mt-2 mb-0`} value={percentage} max="100">`${percentage}%`</progress> 
                <article className="message is-primary">
                    <div className="message-body mt-3 p-2">
                        <small className="">Next watering day is: <br/><strong>{format(dateObject, 'PPPP')} </strong></small>
                    </div>
                </article>
            </span>
        )        
        
    } else if (hasPastTimeWarningMessage){
        wateringTimeState = (
            <span>
                <progress className="progress is-danger mt-2 mb-0" value="100" max="100">100%</progress>
                <article className="message is-danger mt-1">
                    <div className="message-body p-2">
                        <small className="">Last watering day was: <br/><strong>{format(dateObject, 'PPPP')} </strong></small>                       
                    </div>
                </article>
            </span>
        )

    } else if (percentage <= 0) {
        wateringTimeState = (
            <span>
                <progress className="progress is-warning mt-2 mb-0" value="100" max="100">100%</progress>
                <article className="message is-warning mt-1">
                    <div className="message-body p-2">
                        <small className="">Watering day is: <br/><strong>Today!</strong></small>                           
                    </div>
                </article>
            </span>
        )
    } 

    return (
        <div>
           {wateringTimeState}
        </div>                 
    );
  }
  
  export default WateringTime;
  