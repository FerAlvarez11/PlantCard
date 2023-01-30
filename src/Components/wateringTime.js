import React from "react";
import { format } from 'date-fns'

function WateringTime({ percentage, dateToWater, actualDate }) {
    let waterngTimeState;
    const hasPastTimeWarningMessage = actualDate >= dateToWater + 600;

    const dateObject = new Date(dateToWater);

    console.log("hola", dateObject );

    console.log(format(dateObject, 'dd/MM/yyyy'));

    if(percentage > 0){
        waterngTimeState =  <progress className="progress is-primary mt-2 mb-0" value={percentage} max="100">`${percentage}%`</progress> 
    } else if (hasPastTimeWarningMessage){
        waterngTimeState =  
            <article className="message is-danger">
                <div className="message-body">
                    <strong>Watering day was {format(dateObject, 'dd/MM/yyyy')}</strong>
                </div>
            </article>
    } else if (percentage < 0) {
        waterngTimeState =  
            <article className="message is-warning">
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
  