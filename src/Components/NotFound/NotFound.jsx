import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="container d-flex gap-2 flex-column justify-content-center align-items-center  notFound">
        <p>404 Not Found</p>
        <h2 className="fs-1">Oops! Page Not Found</h2>
        <p className="text-center">The page you are looking for doesn't exist. Click button below to go to the homepage </p>
        <Link className="btn btn-success" to={'/'}>Back to Home Page</Link>
      </div>
    </>
  );
}
