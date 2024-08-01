import { useEffect, useState } from "react";
import { FetchMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      const getData = async () => {
        const data = await FetchMovies();
        setMovies(data);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
}
