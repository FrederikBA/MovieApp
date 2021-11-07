import axios from 'axios';
import { useState, useEffect } from 'react'
import star from '../img/star.png'

const MoviesTable = ({ apiUtils }) => {
    const [movies, setMovies] = useState([]);
    const [sorted, setSorted] = useState("");

    const URL = apiUtils.getUrl()

    useEffect(() => {
        const getMovies = async () => {
            const response = await axios.get(URL + '/all')
            setMovies(response.data.all);
        }
        getMovies()
    }, [URL]);

    const sortById = () => {
        setSorted("byId")
        const sorted = (movies.sort((a, b) => { return a.id - b.id }))
        setMovies(sorted)
    }

    const sortByYear = () => {
        setSorted("byYear")
        const sorted = (movies.sort((a, b) => { return b.year - a.year }))
        setMovies(sorted)
    }

    const sortByTitle = () => {
        setSorted("byTitle")
        const sorted = (movies.sort((a, b) => { return (a.title < b.title) ? -1 : (a.title > b.title) ? 1 : 0; }))
        setMovies(sorted)
    }

    const sortByRating = () => {
        setSorted("byRating")
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

export default MoviesTable