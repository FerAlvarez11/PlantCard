import { useState, useEffect } from "react";
import Note from "./Note";

function NotesList({id, notesOpen}) {
        
    const data = localStorage.getItem('plants');
    const dataArray = JSON.parse(data);

    const [plants, setPlants] = useState(dataArray);

    const [newNote, setNewNote] = useState("");

    const isButtonSubmitEnable = !newNote; 
      
    function handleNotes(e) {    
        setNewNote(e.target.value);   
    }  

    const handleAddNote = () => {
        const index = plants.findIndex(object => {
            return object.id === id;
        });

        if(index !== -1){      
            let newDataArrayCopy = [...plants];           
            let plantToAddNote = newDataArrayCopy[index].notes;
            plantToAddNote.push(newNote);     
            setPlants(newDataArrayCopy);    
            setNewNote("");
        }  
    }

    const deleteNote = (plantId, noteIndex) => {
        const index = plants.findIndex(object => {
            return object.id === plantId;
        });

        if(index !== -1){      
            let newDataArrayCopy = [...plants];           
            let plantToDeleteNote = newDataArrayCopy[index].notes;
            plantToDeleteNote.splice(noteIndex, 1);  
            setPlants(newDataArrayCopy);   
        }  
    }

    const index = plants.findIndex(object => {
        return object.id === id;
    });

    let plantNotes = plants[index].notes;   

    useEffect(() => {
        window.localStorage.setItem('plants', JSON.stringify(plants))
    }, [plants]);
    
    return (      
        <div>     
            <div className="modal is-active">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Notes</p>
                        <button className="delete" onClick= {()=>notesOpen()} aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        {plantNotes.map((eachNote, i) =>
                            <Note
                                plantId={id}
                                noteIndex={i}
                                eachNote={eachNote}
                                key={`note_${i}`}
                                deleteNote={deleteNote}
                            />
                        )}
                        <label className="label mt-4 mb-0" htmlFor="notes">Leave a note</label> 
                        <textarea 
                            className="textarea"
                            id="notes" 
                            placeholder="Write a note about your plant" 
                            onChange={handleNotes}
                            value={newNote}
                        />
                    </section>
                    <footer className="modal-card-foot">                              
                        <button onClick={handleAddNote} disabled={isButtonSubmitEnable} className="button is-success">Save note</button>
                    </footer>
                </div>
            </div>
        </div>      
    )
}

export default NotesList;
  