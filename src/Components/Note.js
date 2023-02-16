function Note({eachNote, noteIndex, plantId, deleteNote}){

    console.log(eachNote, noteIndex, plantId)

    const handleDeleteNote = () => {
        deleteNote(plantId, noteIndex)
    }

    return(       
        <article className="message mb-2 is-warning">
            <div className="message-body">
                <div className="level is-mobile">
                    <div className="level-left">
                        <div className="level-item">
                            <p>{eachNote}</p>
                        </div>
                    </div>
                    <div className="level-right">
                        <div className="level-item">
                            <button onClick={handleDeleteNote} className="delete level-right" aria-label="delete"></button>
                        </div>
                    </div>                       
                </div>
            </div>
        </article>
    )
}

export default Note;