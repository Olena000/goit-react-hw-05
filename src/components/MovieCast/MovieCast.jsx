import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchCastById } from "../../services/api";

const baseImgUrl = "https://image.tmdb.org/t/p/w500";

export default function MovieCast() {
  const params = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    FetchCastById(params.movieId).then((data) => setCast(data));
  }, [params.movieId]);
  return (
    <div>
      <ul>
        {cast.map((item) => (
          <li key={item.id}>
            {item.profile_path && (
              <img
                src={`${baseImgUrl}${item.profile_path}`}
                alt={item.title}
                width={100}
              />
            )}
            <p>Name: {item.original_name}</p>
            <p>Character: {item.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
