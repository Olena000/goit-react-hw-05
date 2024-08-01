import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchMoviesById } from "../../services/api";

const baseImgUrl = "https://image.tmdb.org/t/p/w500";

export default function MovieDetailsPage() {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    FetchMoviesById(params.movieId).then((data) => setMovie(data));
  }, [params.movieId]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div>
        {movie.poster_path && (
          <img src={`${baseImgUrl}${movie.poster_path}`} alt={movie.title} />
        )}
      </div>
      <div>
        <h1>{movie.original_title}</h1>
        <p>Release date: {movie.release_date} </p>
        <p>Votes: {movie.vote_count}</p>
        <p>Overview: {movie.overview}</p>
        <p>
          {" "}
          Genres:{" "}
          {movie.genres.map((genre) => (
            <span key={genre.id}>{genre.name} </span>
          ))}
        </p>
      </div>
    </div>
  );
}
