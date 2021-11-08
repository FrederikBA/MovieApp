import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const MoviesTableEdit = ({ apiUtils }) => {
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
            <table className="table table-dark movieTable">
                <thead className="mt-head">
                    <tr>
                        <th className="mt-head-title">ID</th>
                        <th className="mt-head-title">Title</th>
                        <th className="mt-head-title">Edit</th>
                        <th className="mt-head-title">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie) => <tr key={movie.id}><td>{movie.id}</td><td>{movie.title}</td><td><NavLink to={`/movies-table-edit/${movie.id}`}><button>Edit</button></NavLink></td><td><button>Delete</button></td></tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default MoviesTableEdit