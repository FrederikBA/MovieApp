import { useState } from "react";

const AddMovie = ({ apiFacade }) => {
    const init = { year: 0, title: "", imdb: "", rating: 0 };
    const [movie, setMovie] = useState(init);

    const handleInput = (event) => {
        setMovie({ ...movie, [event.target.id]: event.target.value })
    }

    const handleClick = (event) => {
        event.preventDefault()
        apiFacade.addMovie(movie.year, movie.title, movie.imdb, movie.rating)
    }



    return (
        <div className="addMovie">
            <h1>AddMovie</h1>
            <form onChange={handleInput} className="form-group">
                <input className="form-control addInput" id="year" placeholder="Enter year" type="text"></input>
                <input className="form-control addInput" id="title" placeholder="Enter title" type="text"></input>
                <input className="form-control addInput" id="imdb" placeholder="Enter imdb link" type="text"></input>
                <input className="form-control addInput" id="rating" placeholder="Enter rating" type="text"></input>
                <button onClick={handleClick} className="btn btn-primary addButton">Add Movie</button>
            </form>
        </div>
    )
}

export default AddMovie;