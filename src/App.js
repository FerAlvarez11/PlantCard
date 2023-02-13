import PlantList from "./Components/PlantList";
import { Routes, Route } from "react-router-dom";
import AddPlant from "./Components/AddPlant";
import Homepage from "./Components/Homepage";
import "./App.css";
import "bulma/css/bulma.min.css"


function App() {    
    return (    
        <div className="App">   
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/add-plant" element={<AddPlant/>}/>
                <Route path="/plant-list" element={<PlantList/>}/>
            </Routes>    
        </div>
    );
}

export default App;
