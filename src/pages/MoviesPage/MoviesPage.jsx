import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import { FetchSearchMovies } from "../../services/api";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movie, setMovie] = useState([]);

  const setMovieParams = (value) => {
    if (!value) {
      return setSearchParams({});
    }
    searchParams.set("query", value);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await FetchSearchMovies(searchParams.get("query") || "");
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [searchParams]);

  return (
    <>
      <SearchBar onSubmit={setMovieParams} />
      <MovieList movies={movie} />
    </>
  );
}
