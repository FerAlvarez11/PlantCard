import React from "react";
import { format } from 'date-fns'

function WateringTime({ percentage, dateToWater, actualDate }) {
    let waterngTimeState;
    const hasPastTimeWarningMessage = actualDate >= dateToWater + 86400000;

    const dateObject = new Date(dateToWater);

    if(percentage > 0){
        waterngTimeState =  <span>
                                <progress className="progress is-primary mt-2 mb-0" value={percentage} max="100">`${percentage}%`</progress> 
                                <p className="tag is-primary is-light is-large mt-3 has-background-success-light">Next Watering day is {format(dateObject, 'PPPP')}</p>
                            </span>
        
        
    } else if (hasPastTimeWarningMessage){
        waterngTimeState =  <article className="message is-danger">
                                <div className="message-body">
                                    <strong>Watering day was {format(dateObject, 'PPPP')}</strong>
                                </div>
                            </article>
    } else if (percentage < 0) {
        waterngTimeState =  <article className="message is-warning">
                                    <div className="message-body">
                                        <strong>Watering time is today!</strong>
                                    </div>
                            </article>
    } 

    return (
        <div>
           {waterngTimeState}
        </div>                 
    );
  }
  
  export default WateringTime;
  