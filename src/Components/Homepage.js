import {Link} from "react-router-dom";


function Homepage() {
    return (
        <div className="container has-text-centered mt-6">

            <div className="mt-6"><img src='logo.png' alt="Hi" /></div>
            <div className="mt-4 is-size-3 has-text-primary"><h1>Easily track your plants watering</h1></div>
            <div className="mt-4"> 
                <Link to="/add-plant">
                        <button className="button is-primary is-large">Add Plant</button>
                </Link>
            </div>
        </div>
    )
}

export default Homepage;
  