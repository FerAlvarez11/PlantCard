import "../App.css";

function Note({eachNote, noteIndex, plantId, deleteNote}){
    const handleDeleteNote = () => {
        deleteNote(plantId, noteIndex)
    }

    return(   
        <div className='container'>
            <div className='columns is-mobile'>
                <div className='column'>
                    <article className="message is-warning">
                        <div className="message-body word-break">
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