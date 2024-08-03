import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const baseImgUrl = "https://image.tmdb.org/t/p/w500";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <div>
      <ul className={s.list}>
        {movies.map((movie) => (
          <li className={s.item} key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={location}>
              {movie.poster_path && (
                <img
                  className={s.img}
                  src={`${baseImgUrl}${movie.poster_path}`}
                  alt={movie.title}
                />
              )}
              <p className={s.title}>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
