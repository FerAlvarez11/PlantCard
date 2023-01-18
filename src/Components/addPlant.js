import { useState } from "react";
import { useNavigate } from "react-router-dom";


function AddPlant({ handleAddPlant }) {

    const [plants, setPlants] = useState({
        plantName: " ",
        wateringTime: " ",
        notes:" "
    });

    const navigate = useNavigate();
 
    function handlePlantName(e) {
        setPlants({
            ...plants,
            plantName: e.target.value
        });
    }
    
    function handleWateringTime(e) {
        setPlants({
            ...plants,
            wateringTime: e.target.value
          
        });
    }
    
    function handleNotes(e) {
        setPlants({
            ...plants,
            notes: e.target.value
        });
    }
    
    
    const handleOnSubmit = (event) => {
        handleAddPlant(plants);
        navigate("/plant-list");
    };

    
    return (
        <div className="form-container">  
        
                <label 
                    className="labelform" 
                    htmlFor="username">Plant name
                </label>

                <input 
                    className="plantNameInput" 
                    id="username" 
                    placeholder="Plant Name"
                    value={plants.plantName} 
                    onChange={handlePlantName}
                />

                <label className="labelform">Watering time</label>

                <ul 
                    className="wateringtime"
                >
                    <li>
                        <input 
                            type="radio" 
                            id="everyday" 
                            name="amount" 
                            value="Every day" 
                            onChange={handleWateringTime}
                        />

                        <label htmlFor="everyday">Every day</label>
                    </li>

                    <li>
                        <input 
                            type="radio" 
                            id="everythreedays" 
                            name="amount" 
                            value="Every three days" 
                            onChange={handleWateringTime}
                        />
                        <label htmlFor="everythreedays">Every three days</label>
                    </li>

                    <li>
                        <input 
                            type="radio" 
                            id="onceaweek" 
                            name="amount" 
                            value="Once a week" 
                            onChange={handleWateringTime}
                        />

                        <label htmlFor="onceaweek">Once a week</label>
                    </li>

                </ul>


                <label htmlFor="notes" className="labelform">Notes</label>

                <textarea 
                    className="notes"  
                    id="notes" 
                    placeholder="Notes" 
                    value={plants.notes} 
                    onChange={handleNotes}
                />

                <button className="centered button" type="submit" onClick={handleOnSubmit}>Submit</button>
        </div>
    );
}
  
  export default AddPlant;
  