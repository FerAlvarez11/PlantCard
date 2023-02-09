import {Link} from "react-router-dom";
import Carousel from "./Carousel";


function Homepage() {

    var carousselImages =[
        {img:'carousel-homepage-1.png', title:"Dont forget anymore when is the rigth time", subtitle:"All thanks to fer and because she is a great programer, the best one!"}, 
        {img:'carousel-homepage-2.png', title:"You can also write notes", subtitle:"Your plant will be super happy, the happiest plant in the plant world"},
        {img:'carousel-homepage-3.png', title:"Set a time and we will do the rest", subtitle:"If you water your plant at the rigth time all is going to be good, really good!"}
    ];

    return (
        <div className="has-background-primary section is-large">
            <div className="columns is-vcentered">
                <div className="column is-one-fifth"></div>
                <div className="column">
                    <div className="mt-6"><img src='logo.png' alt="Hi" /></div>
                    <p className="title is-size-1 has-text-white">
                        Easily track your plants watering times
                    </p>
                    <p className="subtitle has-text-white is-size-4 mt-4">
                        Start now adding a plant to your plant collection
                    </p>
                    <Link to="/add-plant">
                        <button className="button is-warning is-rounded is-large mb-5">Add a plant</button>
                    </Link>
                </div>
                <div className="column is-one-quarter">
                    <Carousel carrouselData={carousselImages}/>
                </div>
                <div className="column is-one-fifth"></div>
            </div>
        </div>
    )
}

export default Homepage;
  