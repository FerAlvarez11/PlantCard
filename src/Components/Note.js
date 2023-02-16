import "../App.css";

function Note({eachNote, noteIndex, plantId, deleteNote}){
    const handleDeleteNote = () => {
        deleteNote(plantId, noteIndex)
    }

    return(   
        <div class='container'>
            <div class='columns is-mobile'>
                <div class='column'>
                    <article class="message is-warning">
                        <div class="message-body word-break">
                            {eachNote} 
                            <br/>
                            <button onClick={handleDeleteNote} className="button is-ghost p-0 mt-3 is-small">Delete note</button>                           
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default Note;