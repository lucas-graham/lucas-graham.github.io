import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();

  // Log the error for internal debugging
  console.error(error);

  let errorMessage = "An unexpected error occurred.";

  // Check if it is a valid React Router error response (like a 404)
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      errorMessage = "Sorry, the page you are looking for does not exist.";
    } else {
      errorMessage = error.statusText || error.data;
    }
  }

  return (
    <div
      style={{ padding: "40px", textAlign: "center", fontFamily: "sans-serif" }}
    >
      <h1>Oops!</h1>
      <p>{errorMessage}</p>
      <Link to='/' style={{ color: "#0070f3", textDecoration: "underline" }}>
        Back to Home
      </Link>
    </div>
  );
}
