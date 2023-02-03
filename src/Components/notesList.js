import { useState } from "react";
import Note from "./note";

function NotesList({id, addNote, notes}) {

    const [isNotesListOpen, setIsNotesListOpen] = useState(false);

    // const [newNote, setNewNote] = useState([]);

    let newNote="";

    function handleNotes(e) {   
        newNote= e.target.value;
    }  

    
    const handleAddNewNote = () => {
        addNote(id, newNote);
        console.log(notes);
    }

    return (
        <div>  
            <button onClick= {()=>setIsNotesListOpen(!isNotesListOpen)}className=" level-right button button is-text has-text-info">View notes</button>             
            
            {isNotesListOpen && (
                <div>       
                    <textarea 
                        className="textarea"
                        id="notes" 
                        placeholder="Write some notes about your plant" 
                        onChange={handleNotes}
                    />
                    <div className="has-text-centered mt-4">
                    <button onClick={handleAddNewNote} className="button is-warning" type="submit" >Submit</button>
                </div>
                    {notes.map((eachNote, i) =>
                        <Note 
                            eachNote={eachNote}
                            key={`plant_${i}`}
                        />
                    )}                    
                </div>           
            )}     
        </div>
                  
        
    )
}

export default NotesList;
  