import axios from "axios";
import { useState } from "react"

const AddMovie = ({ apiUtils }) => {
    const init = { year: "", title: "", imdb: "", rating: "" };
    const [movie, setMovie] = useState(init);
    const [statusMessage, setStatusMessage] = useState("");
    const [msgColor, setMsgColor] = useState("");

    const URL = apiUtils.getUrl()

    const handleInput = (event) => {
        setMovie({ ...movie, [event.target.id]: event.target.value })
    }

    const submitMovie = async () => {
        try {
            await axios.post(URL, {
                year: movie.year,
                title: movie.title,
                imdb: movie.imdb,
                rating: movie.rating
            })
            setMsgColor('#4caf50');
            setStatusMessage('Movie Added Successfully!');
        } catch (error) {
            setStatusMessage(error.response.data.message);
            setMsgColor('#FF0000')
        }
    }

    return (
        <div>
            <div className="addMovie">
                <h2>Add Movie</h2>
                <p className="statusMsg" style={{ color: msgColor }}>{statusMessage}</p>
                <form onChange={handleInput} className="form-group">
                    <input className="form-control addInput" id="year" placeholder="Enter year" type="text"></input>
                    <input className="form-control addInput" id="title" placeholder="Enter title" type="text"></input>
                    <input className="form-control addInput" id="imdb" placeholder="Enter imdb link" type="text"></input>
                    <input className="form-control addInput" id="rating" placeholder="Enter rating" type="text"></input>
                </form>
                <button onClick={submitMovie} className="btn btn-primary addButton">Add Movie</button>
            </div>
        </div>
    )
}

export default AddMovie