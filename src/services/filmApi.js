import axios from "axios";

const API_KEY = 'f64cdb7daa669b42fe97bd3c6db06632';
const BASE_URL = 'https://api.themoviedb.org/3/';

export async function getTrandingFilms() {
    const { data } = await axios.get(`${BASE_URL}trending/all/day?api_key=${API_KEY}`);
    return data.results;
}

export async function getFilmsById(id) {
    const { data } = await axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);
    return data;
}

export async function getFilmsCast(id) {
    const { data } = await axios.get(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`);
    return data.cast;
}

export async function getFilmReview(id) {
    const { data } = await axios.get(`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`);
    return data.results;
}

export async function getSearchFilms(query) {
    const { data } = await axios.get(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`);
    return data.results;
}