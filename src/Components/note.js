function Note({eachNote}){
    return(
       
        <article class="message mb-2">
            <div class="message-body">
                <h1>{eachNote}</h1>
            </div>
        </article>
    )
}

export default Note;