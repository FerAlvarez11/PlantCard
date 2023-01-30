import React from "react";


function WateringTime({ percentage }) {

    let waterngTimeState;

    if(percentage > 0){
        waterngTimeState =  <progress className="progress is-primary mt-2 mb-0" value={percentage} max="100">`${percentage}%`</progress> 
    } else {
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
  