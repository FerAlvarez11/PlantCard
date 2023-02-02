import { useState } from "react";


function NotesList() {

    const [toggle, setToggle] = useState(false);
    
    return (
        <div>  
            <button onClick= {()=>setToggle(!toggle)}className=" level-right button button is-text has-text-info">View notes</button>          

            {toggle && (
                <h1>"its working"</h1>
            )}     
        </div>
                  
        
    )
}

export default NotesList;
  