import {Link} from "react-router-dom";


function Homepage() {
    return (
        <>
            <div className="hero-head is-white is-large has-text-centered mt-6 mb-4">
                <div className="mt-6"><img src='logo.png' alt="Hi" /></div>
            </div>
            
            <section className="hero is-primary is-fullheight has-text-centered">
                <div className="my-5">
                    <p className="title">
                        Easily track your plants watering
                    </p>
                    <p className="subtitle">
                        Primary subtitle
                    </p>
                    <Link to="/add-plant">
                        <button className="button is-primary is-inverted is-large">Add Plant</button>
                    </Link>
                </div>
            </section>
        </>
        
    )
}

export default Homepage;
  