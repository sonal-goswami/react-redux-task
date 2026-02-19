import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="card p-5 shadow-lg text-center" style={{ width: "400px" }}>
        <h2 className="mb-4">Welcome to React Redux App</h2>

        <div className="d-grid gap-3">
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>

          <Link to="/register" className="btn btn-success">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
