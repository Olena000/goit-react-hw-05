import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <p>Sorry... 404</p>
      <Link to={"/"}>Back to home</Link>
    </div>
  );
}
