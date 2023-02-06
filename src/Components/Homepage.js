import {Link} from "react-router-dom";


function Homepage() {
    return (
        <div className="has-background-primary section is-large">
            <div className="columns">
                <div className="column"></div>
                <div className="column  ml-6 pl-6">
                    <div className="mt-6"><img src='logo.png' alt="Hi" /></div>
                    <p className="title has-text-white">
                        Easily track your plants watering times
                    </p>
                    <p className="subtitle has-text-white">
                        Start now adding a plant to your plant collection
                    </p>
                    <Link to="/add-plant">
                        <button className="button is-warning is-rounded is-large">Add a plant</button>
                    </Link>

                </div>
                <div className="column">
                    <div className="mt-6"><img src='carrousel.png' alt="Hi" /></div>
                </div>
                <div className="column"></div>
            </div>
        </div>
    )
}

export default Homepage;
  