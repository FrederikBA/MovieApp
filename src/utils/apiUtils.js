const URL = 'http://localhost:8080/movieapp_war_exploded/api/movie';

const apiUtils = () => {

    const getUrl = () => {
        return URL;
    }


    return {
        getUrl
    }
}

export default apiUtils();