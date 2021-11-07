import axios from "axios";

const URL = 'http://localhost:8080/movieapp_war_exploded/api/movie';

const apiFacade = () => {

    const getMovies = async () => {
        const response = await axios.get(URL + '/all')
        return response.data
    }

    const addMovie = async (year, title, imdb, rating) => {
        await axios.post(URL, {
            year: year,
            title: title,
            imdb: imdb,
            rating: rating
        })
    }

    return {
        getMovies,
        addMovie
    }
}

export default apiFacade();