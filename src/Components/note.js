function Note({eachNote}){
    return(
       
        <article className="message mb-2">
            <div className="message-body">
                <h1>{eachNote}</h1>
            </div>
        </article>
    )
}

export default Note;