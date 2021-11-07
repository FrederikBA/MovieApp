import { useState } from "react";

const AddMovie = ({ apiFacade }) => {
    const init = { year: "", title: "", imdb: "", rating: "" };
    const [movie, setMovie] = useState(init);
    const [statusMessage, setStatusMessage] = useState("");
    const [msgColor, setMsgColor] = useState("");

    const handleInput = (event) => {
        setMovie({ ...movie, [event.target.id]: event.target.value })
    }

    const handleClick = (event) => {
        apiFacade.addMovie(movie.year, movie.title, movie.imdb, movie.rating)
            .catch(error => {
                if (error.response) {
                    setMsgColor('#FF0000');
                    setStatusMessage(error.response.data.message);
                }
            })
        setMsgColor('#4caf50');
        setStatusMessage('Movie Added Successfully!');
        event.preventDefault()
    }


    return (
        <div className="addMovie">
            <h2>Add Movie</h2>
            <p className="statusMsg" style={{ color: msgColor }}>{statusMessage}</p>
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