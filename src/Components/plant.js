function Plant({ plantName, wateringTime}) {
    
    return (
        <div className="container">  
        
            <article className="media box m-4">
                <figure className="media-left">
                    <p className="image is-64x64">
                    <img src='avatar.png' alt="Hi" />
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content px-4">
                        <strong className="mb-3 is-size-3">{plantName}</strong><br/>   
                        <div className="">
                            <small>Watering time: {wateringTime}</small>
                        </div>
                        <progress className="progress is-primary mt-2 mb-0" value="15" max="100">15%</progress>
                        <p className="tag is-primary is-light is-large mt-3 has-background-success-light">3 days to water</p>
                    </div>
                        
                    <nav className="level px-4">
                        <div className="level-right">
                            <button className=" level-right button button is-text has-text-info">View notes</button>                         
                        </div>
                        <div className="level-left">
                            <button className=" level-right button is-primary is-outlined">Water</button>                         
                        </div>
                    </nav>
                </div>                  
            </article>            
        </div>

    );
  }
  
  export default Plant;
  