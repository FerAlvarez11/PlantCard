import {Link} from "react-router-dom";


function Homepage() {
    return (
        <div className="homepage">
            <div className="homepageDiv">
                <img  src={require('./logo.png')} alt="Logo" />
                <h1 className="h1Homepage centered">Easily track your plants watering</h1>
                <Link className="centered button" to="/add-plant">Add Plant</Link>
            </div>
        </div>
    )
}

export default Homepage;
  