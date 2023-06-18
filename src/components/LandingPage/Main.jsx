import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      Main
      <button>
        <Link to="Registration">Enroll Now</Link>
      </button>
    </div>
  );
};

export default Main;
