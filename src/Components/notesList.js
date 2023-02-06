import { useState } from "react";
import Note from "./note";

function NotesList({id, addNote, notes}) {
    const [isNotesListOpen, setIsNotesListOpen] = useState(false);

    let buttonViewNote = "View notes";

    if(isNotesListOpen === true){
        buttonViewNote = "Hide notes";
    } 

    let newNote="";

    function handleNotes(e) {   
        newNote= e.target.value;        
    }  

    // const isButtonSubmitEnable = !newNote;

    console.log(newNote.length, "newnote");
    
    const handleAddNewNote = () => {
        addNote(id, newNote);
        console.log(notes);
    }

    return (
        <div>  
            <button onClick= {()=>setIsNotesListOpen(!isNotesListOpen)} className=" level-right button is-text has-text-info mb-5 dropdown-menu2">{buttonViewNote}</button>             
            
            {isNotesListOpen && (
                <div>     
                    {notes.map((eachNote, i) =>
                        <Note 
                            eachNote={eachNote}
                            key={`plant_${i}`}
                        />
                    )}
                    <label className="label mt-4 mb-0" htmlFor="notes">Leave a note</label> 
                    <textarea 
                        className="textarea"
                        id="notes" 
                        placeholder="Write a note about your plant" 
                        onChange={handleNotes}
                    />
                    <div className="has-text-centered mt-4">
                        <button onClick={handleAddNewNote} className="button is-warning" type="submit" >Submit</button>                    
                    </div>                
                </div>           
            )}     
        </div>
                  
        
    )
}

export default NotesList;
  