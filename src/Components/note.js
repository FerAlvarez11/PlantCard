function Note({eachNote}){

    return(       
        <article className="message mb-2 is-warning">
            <div className="message-body">
                <div className="level is-mobile">
                    <div className="level-left">
                        <div className="level-item">
                            <h1>{eachNote}</h1>
                        </div>
                    </div>
                    <div className="level-right">
                        <div className="level-item">
                            <button className="delete level-right" aria-label="delete"></button>
                        </div>
                    </div>                       
                </div>
            </div>
        </article>
    )
}

export default Note;