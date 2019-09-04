import fetch from "node-fetch";
const API_URL = "https://yts-proxy.now.sh/list_movies.json";

export const getMovies = (litmit, rating) => {
    return fetch(`${API_URL}`)
        .then(res => res.json())
        .then(json => json.data.movies);
};
