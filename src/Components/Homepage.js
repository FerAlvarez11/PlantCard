import {Link} from "react-router-dom";
import Carousel from "./Carousel";

function Homepage() {
    var carousselImages =[
        {img:'carousel-homepage-1.png', title:"Love your plants right?", subtitle:"Forgetting when to water your plants doesn't make you a bad a person"}, 
        {img:'carousel-homepage-2.png', title:"Set a time and we will do the rest", subtitle:"If you water your plant at the rigth time all is going to be good, really good!"},
        {img:'carousel-homepage-3.png', title:"Notes are great!", subtitle:"Little remainders that help a lot.  the happiest plant in the plant world"}
    ];

    return (
        <section className="has-background-primary hero is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-vcetered">
                        <div className="column is-half">
                            <div className="max-width"><img src='/PlantCard/logo.png' alt="Logo" /></div>
                                <p className="title is-size-1 is-dark-green">
                                    Easily track your plants watering times.
                                </p>
                                <p className="subtitle is-dark-green is-size-4 mt-4">
                                    Start now adding a plant to your plant collection.
                                </p>
                            <Link to="/add-plant">
                                <button className="button is-warning is-rounded is-large mb-5" style={{border: "1px solid #4c4329"}}>Add a plant</button>
                            </Link>
                        </div>
                        <div className="column" style={{maxWidth: "100px"}}></div>
                        <div className="column is-flex max-width">
                            <Carousel carrouselData={carousselImages}/>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Homepage;
  