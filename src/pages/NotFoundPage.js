import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="center-all view-full flex-col">
      404 not found.
      <Link to="/" className="list-none">
        Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
