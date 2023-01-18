function Plant({ plantName, wateringTime}) {
    
    return (
      <div className="plant">  
        <span>{plantName}</span>
        <div className="plant-footer">
            <small>{wateringTime}</small>
            <button>Water</button>
        </div>
      </div>
    );
  }
  
  export default Plant;
  