import React from "react";
import { Link } from "react-router-dom";
import List from "./List";

const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <List />
      <Link style={{ textAlign: "right" }} to="/form">
        Add a pet to the shelter
      </Link>
    </div>
  );
};

export default Home;
