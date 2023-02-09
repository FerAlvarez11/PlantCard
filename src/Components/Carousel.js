import "./carousel.css";
import { useState } from "react";


function Carousel({carrouselData}) {

    const [currentSlide, setCurrentSlide] = useState(1);

    const handleArrowBack = () => {
        if(currentSlide === 0){
            return setCurrentSlide(carrouselData.length - 1);
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
                    <i className="arrow left-arrow m-auto is-clickable" onClick={handleArrowBack}></i>
                </div>        
                <div className="column has-text-centered is-three-quarters"><img src={carrouselData[currentSlide].img} alt="Hi"/></div>
                <div className="column">
                    <i className="arrow right-arrow m-auto is-clickable" onClick={handleArrowFoward}></i>
                </div>
            </div>
            <p className="title has-text-white is-size-6">
                {carrouselData[currentSlide].title}
            </p>
            <p className="subtitle has-text-white is-size-6">
                {carrouselData[currentSlide].subtitle}
            </p>
        </div>
    )
}

export default Carousel;
  