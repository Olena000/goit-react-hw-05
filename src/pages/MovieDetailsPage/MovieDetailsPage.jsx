import { Suspense, useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { FetchMoviesById } from "../../services/api";
import s from "./MovieDetailsPage.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const baseImgUrl = "https://image.tmdb.org/t/p/w500";

export default function MovieDetailsPage() {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const goBackRef = useRef(location?.state || "/movies");

  useEffect(() => {
    FetchMoviesById(params.movieId).then((data) => setMovie(data));
  }, [params.movieId]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Link to={goBackRef.current} className={s.goBack}>
        Go back
      </Link>
      <div>
        {movie.poster_path && (
          <img
            src={`${baseImgUrl}${movie.poster_path}`}
            alt={movie.title}
            width={250}
          />
        )}
      </div>
      <div>
        <h1>{movie.original_title}</h1>
        <p>
          Genres:{" "}
          {movie.genres && movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>Overview: {movie.overview}</p>
        <p>Release date: {movie.release_date} </p>
        <p>Votes: {movie.vote_count}</p>
      </div>
      <div>
        <h3>Additional information</h3>
        <NavLink to="cast" className={buildLinkClass}>
          Cast
        </NavLink>
        <NavLink to="reviews" className={buildLinkClass}>
          Reviews
        </NavLink>
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
