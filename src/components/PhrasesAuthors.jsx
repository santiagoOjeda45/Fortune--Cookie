const PhrasesAuthors = ({data}) => {

    return(
        <article className="cookie">
            <h1 className="title">Galletas de la fortuna</h1>
            <div className="phrase"><p>{data.phrase}</p></div>
            <div className="author"><p>Por: {data.author}</p></div>
        </article>
    )
}

export default PhrasesAuthors