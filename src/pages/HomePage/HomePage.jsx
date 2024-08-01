import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { FetchMovies } from "../../services/api";

export default function HomePage() {
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
