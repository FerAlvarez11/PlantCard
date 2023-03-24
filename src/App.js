import PlantList from "./Components/PlantList";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AddPlant from "./Components/AddPlant";
import Homepage from "./Components/Homepage";
import "./App.css";
import "bulma/css/bulma.min.css"

function App() {    
    return (    
        <div className="App">   
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/add-plant" element={<AddPlant/>}/>
                    <Route path="/plant-list" element={<PlantList/>}/>
                </Routes> 
            </BrowserRouter>   
        </div>
    );
}

export default App;
