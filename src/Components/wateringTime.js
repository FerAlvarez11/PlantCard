import React from "react";
import { format } from 'date-fns'

function WateringTime({ percentage, dateToWater, actualDate }) {
    let waterngTimeState;
    const hasPastTimeWarningMessage = actualDate >= dateToWater + 30000;
    const dateObject = new Date(dateToWater);

    if(percentage > 0){
        waterngTimeState = (
            <span>
                <progress className="progress is-primary mt-2 mb-0" value={percentage} max="100">`${percentage}%`</progress> 
                <article className="message is-primary">
                    <div className="message-body mt-3">
                        <strong>Next Watering day is: {format(dateObject, 'PPPP')}</strong>
                    </div>
                </article>
            </span>
        )
        
        
    } else if (hasPastTimeWarningMessage){
        waterngTimeState = (
            <article className="message is-danger mt-3">
                <div className="message-body">
                    <strong>Watering day was: {format(dateObject, 'PPPP')}</strong>
                </div>
            </article>
        )

    } else if (percentage < 0) {
        waterngTimeState = (
            <article className="message is-warning mt-3">
                <div className="message-body">
                    <strong>Watering time is today!</strong>
                </div>
            </article>
        )
    } 

    return (
        <div>
           {waterngTimeState}
        </div>                 
    );
  }
  
  export default WateringTime;
  