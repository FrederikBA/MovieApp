import axios from "axios"
import { useParams } from "react-router"
import { useState, useEffect } from "react"

const EditMovie = ({ apiUtils }) => {
    const [movie, setMovie] = useState({ year: "", title: "", imdb: "", rating: "" });
    const [statusMessage, setStatusMessage] = useState("");
    const [msgColor, setMsgColor] = useState("");

    const id = parseInt(useParams().id)
    const URL = apiUtils.getUrl()

    useEffect(() => {
        const getMovieById = async () => {
            const response = await axios.get(URL + '/' + id)
            setMovie(response.data)
        }
        getMovieById()
    }, [URL]);


    const handleInput = (event) => {
        setMovie({ ...movie, [event.target.id]: event.target.value })
    }

    const editMovie = async () => {
        try {
            await axios.put(URL + '/' + id, {
                year: movie.year,
                title: movie.title,
                imdb: movie.imdb,
                rating: movie.rating
            })
            setMsgColor('#4caf50');
            setStatusMessage('Movie Edited Successfully!');
        } catch (error) {
            console.log(error.response.data.message);
        }
    }


    return (
        <div>
            <h1>Edit Movie</h1>
            <form onChange={handleInput} className="form-group">
                <p className="statusMsg" style={{ color: msgColor }}>{statusMessage}</p>
                <p>You are editing the movie with ID: {id}</p>
                <input className="form-control addInput" id="year" defaultValue={movie.year} placeholder="Enter year" type="text"></input>
                <input className="form-control addInput" id="title" defaultValue={movie.title} placeholder="Enter title" type="text"></input>
                <input className="form-control addInput" id="imdb" defaultValue={movie.imdb} placeholder="Enter imdb link" type="text"></input>
                <input className="form-control addInput" id="rating" defaultValue={movie.rating} placeholder="Enter rating" type="text"></input>
            </form>
            <button onClick={editMovie} className="btn btn-primary addButton">Edit Movie</button>
        </div >
    )
}

export default EditMovie