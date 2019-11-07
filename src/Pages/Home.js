import React from "react";
// import logo from "./logo.svg";
import Navbar from "../Components/layout/Navbar";
import Carousels from "../Components/Carousel/Carousels";
import Card from "../Components/Card/Card";
function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Carousels />
      <Card />
      <header className="App-header">{}</header>
    </div>
  );
}

export default Home;
