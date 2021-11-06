import { useState, useEffect } from 'react'
import star from '../img/star.png'

const MoviesTable = ({ apiFacade }) => {
    const [movies, setMovies] = useState([]);
    const [isSorted, setIsSorted] = useState("");

    useEffect(() => {
        const getMovies = async () => {
            const movieResponse = await apiFacade.getMovies()
            setMovies(movieResponse.all)
        }
        getMovies()
    }, []);

    const sortById = () => {
        setIsSorted("byid")
        const sorted = (movies.sort((a, b) => { return a.id - b.id }))
        setMovies(sorted)
    }

    const sortByYear = () => {
        setIsSorted("byyear")
        const sorted = (movies.sort((a, b) => { return b.year - a.year }))
        setMovies(sorted)
    }

    const sortByTitle = () => {
        setIsSorted("bytitle")
        const sorted = (movies.sort((a, b) => { return (a.title < b.title) ? -1 : (a.title > b.title) ? 1 : 0; }))
        console.log(sorted);
        setMovies(sorted)
    }

    const sortByRating = () => {
        setIsSorted("byrating")
        const sorted = (movies.sort((a, b) => { return b.rating - a.rating }))
        setMovies(sorted)

    }

    return (
        <div>
            <table className="table table-dark movieTable">
                <thead className="mt-head">
                    <tr>
                        <th className="mt-head-title" onClick={sortById}>ID</th>
                        <th className="mt-head-title" onClick={sortByYear}>Year</th>
                        <th className="mt-head-title" onClick={sortByTitle}>Title</th>
                        <th className="mt-head-title" onClick={sortByRating}>IMDb Rating</th>
                        <th>IMDb</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie) => <tr key={movie.id}><td>{movie.id}</td><td>{movie.year}</td><td>{movie.title}</td><td><img className="star" src={star} alt="Rating Star" />{movie.rating}/10</td><td><a className="imdbLink" href={movie.imdb} rel="noopener noreferrer" target="_blank">IMDb</a></td></tr>)}
                </tbody>
            </table>
        </div >
    )
}

export default MoviesTable;