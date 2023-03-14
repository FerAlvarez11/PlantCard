import React from "react";
import { format } from 'date-fns';

function WateringTime({ percentage, dateToWater, actualDate, buttonPressed }) {
    let wateringTimeState;
    const hasPastTimeWarningMessage = actualDate >= dateToWater + 30000;
    const dateObject = new Date(dateToWater);

    var isActive = buttonPressed;

    console.log(isActive);

    if(percentage > 0){
        wateringTimeState = (
            <span>
                <progress className={`progress is-primary mt-2 mb-0 ${isActive ? 'waterTimeRestarted' : ''}`} value={percentage} max="100">`${percentage}%`</progress> 
                <article className="message is-primary">
                    <div className="message-body mt-3 p-2">
                        <small className="has-text-weight-bold">Next Watering day is: <br/> {format(dateObject, 'PPPP')}</small>
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
                        <small className="has-text-weight-bold">Watering day was: <br/> {format(dateObject, 'PPPP')}</small>
                    </div>
                </article>
            </span>
        )

    } else if (percentage < 0) {
        wateringTimeState = (
            <span>
                <progress className="progress is-warning mt-2 mb-0" value="100" max="100">100%</progress>
                <article className="message is-warning mt-1">
                    <div className="message-body p-2">
                        <small className="has-text-weight-bold">Watering day is: <br/>Today!</small>
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
  