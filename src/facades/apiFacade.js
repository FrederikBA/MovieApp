import axios from "axios";

const URL = 'http://localhost:8080/movieapp_war_exploded/api/movie';

const apiFacade = () => {

    const getMovies = async () => {
        const response = await axios.get(URL + '/all')
        return response.data
    }

    return {
        getMovies,
    }
}

export default apiFacade();