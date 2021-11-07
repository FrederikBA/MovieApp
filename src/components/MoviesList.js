import axios from "axios";
import { useState, useEffect } from "react";

const MoviesList = ({ apiUtils }) => {
    const [movies, setMovies] = useState([]);

    const URL = apiUtils.getUrl()

    useEffect(() => {
        const getMovies = async () => {
            const response = await axios.get(URL + '/all')
            setMovies(response.data.all);
        }
        getMovies()
    }, [URL]);


    return (
        <div>
            <h1>Movies</h1>
            <ul>{movies.map((movie) => <li className="movieRecord" key={movie.id}> {movie.year} {movie.title} <a className="imdbLink" href={movie.imdb} rel="noopener noreferrer" target="_blank">IMDb</a> </li>)}</ul>
        </div>
    )
}

export default MoviesList