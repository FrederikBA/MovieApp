import { useState, useEffect } from "react";

const MoviesList = ({ apiFacade }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const movieResponse = await apiFacade.getMovies()
            setMovies(movieResponse.all)
        }
        getMovies()
    }, []);


    return (
        <div>
            <h1>Movies</h1>
            <ul>{movies.map((movie) => <li className="movieRecord" key={movie.id}> {movie.year} {movie.title} <a className="imdbLink" href={movie.imdb} rel="noopener noreferrer" target="_blank">IMDb</a> </li>)}</ul>
        </div>
    )
}

export default MoviesList;