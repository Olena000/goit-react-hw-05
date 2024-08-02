import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchReviewsById } from "../../services/api";

export default function MovieReviews() {
  const params = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    FetchReviewsById(params.movieId).then((data) => setReviews(data));
  }, [params.movieId]);
  return (
    <div>
      <ul>
        {reviews.map(({ author, created_at: id, content }) => (
          <li key={id}>
            <p>{author}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
