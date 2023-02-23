export const Item = ( { result } ) => {
    
    const contnet = result?.thumbnail?.source ? 
         (
            <article className="search-item">
                <div className="item-row">
                    <div className="item-column">
                        <img
                            src={ result.thumbnail.source }
                            width={ result.thumbnail.width }
                            height={ result.thumbnail.height }
                        />
                    </div>
                    <div className="item-column">
                        <h2>
                            <a href={ `https://en.wikipedia.org/?curid=${ result.pageid }` } target="_blank">{ result.title }</a>
                        </h2>
                        <p>{ result.extract}</p>
                    </div>
                </div>
            </article>
        ) : (
            <article className="search-item">
                <div className="item-column">
                    <h2>
                      <a href={ `https://en.wikipedia.org/?curid=${ result.pageid }` } target="_blank">
                        { result.title }
                     </a>
                    </h2>
                    <p>{ result.extract }</p>
                </div>
            </article>
        )
    

    return contnet;

};
