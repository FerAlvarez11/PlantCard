import "./carousel.css";
import { useState } from "react";


function Carousel() {
    var carousselImages =[
        {img:'carousel-homepage-1.png', title:"Dont forget anymore when is the rigth time", subtitle:"All thanks to fer and because she is a great programer, the best one!"}, 
        {img:'carousel-homepage-2.png', title:"You can also write notes", subtitle:"Your plant will be super happy, the happiest plant in the plant world"},
        {img:'carousel-homepage-3.png', title:"Set a time and we will do the rest", subtitle:"If you water your plant at the rigth time all is going to be good, really good!"}
    ];

    const [currentSlide, setCurrentSlide] = useState(1);

    const handleArrowBack = () => {
        if(currentSlide === 0){
            return setCurrentSlide(carousselImages.length - 1);
        }
        return setCurrentSlide(currentSlide - 1)
    }

    const handleArrowFoward = () => {
        if(currentSlide === 2){
            return setCurrentSlide(0);
        }
        return setCurrentSlide(currentSlide + 1)
    }

    return (
        <div className="has-text-centered">        
            <div className="columns is-mobile is-vcentered">
                <div className="column">
                    <i className="arrow left-arrow m-auto" onClick={handleArrowBack}></i>
                </div>        
                <div className="column has-text-centered is-three-quarters"><img src={carousselImages[currentSlide].img} alt="Hi"/></div>
                <div className="column">
                    <i className="arrow right-arrow m-auto" onClick={handleArrowFoward}></i>
                </div>
            </div>
            <p className="title has-text-white is-size-6">
                {carousselImages[currentSlide].title}
            </p>
            <p className="subtitle has-text-white is-size-6">
                {carousselImages[currentSlide].subtitle}
            </p>
        </div>
    )
}

export default Carousel;
  