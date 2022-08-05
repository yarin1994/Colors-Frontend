import React from "react";
import "./Main.css";
import ColorCard from "../components/ColorCard";

const Main = () => {
  return (
    <>
      <h5>Favorite Colors</h5>
      <div className="container">
        <ColorCard />
      </div>
    </>
  );
};

export default Main;
