import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const keyAuthorization =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGY3N2JhZjg4NDAwNjk1MGIwYzI0NDQ5YTEyNDEzNCIsIm5iZiI6MTcyMjMzNTM5Ny44MjA0MDYsInN1YiI6IjY2YThhYWFkZGE3OTQ5NzcyM2EzNmVhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P6sLbokdQqebSWVGWLfNGi9QCP_hJhPAlpnYZ61F2Gw";

axios.defaults.headers.common["Authorization"] = `Bearer ${keyAuthorization}`;

export const FetchMovies = async () => {
  const response = await axios.get("/trending/movie/day");
  return response.data.results;
};

export const FetchMoviesById = async (id) => {
  const response = await axios.get(`/movie/${id}`);
  return response.data;
};
