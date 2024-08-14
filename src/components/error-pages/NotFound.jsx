import React from "react";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <a href="/" className="home-link">
        Go Back Home
      </a>
    </div>
  );
}

export default NotFound;
