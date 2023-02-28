import "./carousel.css";
import {  useState, useRef, useEffect } from "react";

function Carousel({carrouselData, handleAvatar}) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const prevSlide = useRef(null);

    useEffect(() => {
        let didSlideshowChange = prevSlide.current !== currentSlide;

        if(typeof handleAvatar !== "undefined" && didSlideshowChange) {
            handleAvatar(currentSlide);
            prevSlide.current = currentSlide;
        }
    });

    const handleArrowBack = () => {
        if(currentSlide === 0){
            return setCurrentSlide(carrouselData.length - 1);
        }
        return setCurrentSlide(currentSlide - 1)
    }

    const handleArrowFoward = () => {
        if(currentSlide === carrouselData.length - 1){
            return setCurrentSlide(0);
        }
        return setCurrentSlide(currentSlide + 1)
    }
    
    return (
        <div className="has-text-centered">        
            <div className="columns is-mobile is-vcentered" style={{userSelect: 'none'}}>
                <div className="column">
                    <i className="arrow left-arrow m-auto is-clickable icon is-large-mobile" onClick={handleArrowBack}></i>
                </div>        
                <div className="column has-text-centered is-three-quarters"><img src={`/PlantCard/images/` + carrouselData[currentSlide].img} alt="plant-avatar"/></div>
                <div className="column">
                    <i className="arrow right-arrow m-auto is-clickable icon is-large-mobile" onClick={handleArrowFoward}></i>
                </div>
            </div>          

            <p className="title is-dark-green is-size-5">
                {carrouselData[currentSlide].title}
            </p>
            <p className="subtitle has-text-white is-size-6">
                {carrouselData[currentSlide].subtitle}
            </p>
            
        </div>
    )
}

export default Carousel;
  