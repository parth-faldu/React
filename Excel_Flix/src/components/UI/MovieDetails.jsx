import { useLoaderData } from "react-router-dom"

export const MovieDetails = () => {
    const movieData = useLoaderData();
    const { Title, Year, Type, Genre, Rated, Poster, imdbID } = movieData;
    return <>
        <div className="container">
            <li className="hero-container">
                <div className="main-container">
                    <div className="poster-container">
                        <img src={Poster} className="poster" alt={imdbID} />
                    </div>
                    <div className="ticket-container">
                        <div className="ticket__content">
                            <h4 className="ticket__movie-title">Title : {Title}</h4>
                            <p className="ticket__current-price">Type : {Type}</p>
                            <p className="ticket__year">Year : {Year}</p>
                            <p className="ticket__genre">Genre : {Genre}</p>
                            <p className="ticket__rated">Rated : {Rated}</p>
                        </div>
                        <button className="ticket__buy-btn">Watch Now</button>
                    </div>
                </div>
            </li>
        </div>
    </>
}