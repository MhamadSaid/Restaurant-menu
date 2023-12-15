import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/Home.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div
      className="home"
      id="/"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="headerContainer">
        <div>
          <h1> Pizza Joy </h1>
          <p className="title">Pizzas for All Tastes</p>
          <Link to="/menu">
            <button className="btn"> View Menu</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
