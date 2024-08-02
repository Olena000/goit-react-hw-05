import { Link, useLocation } from "react-router-dom";

const baseImgUrl = "https://image.tmdb.org/t/p/w500";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={location}>
              {movie.poster_path && (
                <img
                  src={`${baseImgUrl}${movie.poster_path}`}
                  alt={movie.title}
                  width={250}
                />
              )}
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
