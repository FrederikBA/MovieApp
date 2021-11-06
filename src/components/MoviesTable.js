import { useState, useEffect } from 'react'
import star from '../img/star.png'


const MoviesTable = ({ apiFacade }) => {
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
            <table className="table table-dark movieTable">
                <thead className="mt-head">
                    <th>Year</th>
                    <th>Title</th>
                    <th>IMDb Rating</th>
                    <th>IMDb</th>
                </thead>
                <tbody>
                    {movies.map((movie) => <tr><td>{movie.year}</td><td>{movie.title}</td><td><img className="star" src={star} />{movie.rating}/10</td><td><a className="imdbLink" href={movie.imdb} rel="noopener noreferrer" target="_blank">IMDb</a></td> </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default MoviesTable;