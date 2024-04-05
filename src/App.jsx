import React from "react";
import Gallery from "./components/Gallery";
import Nav from "./components/nav";
import Jumbotron from "./components/Jumbotron";
import BeyondSection from "./components/BeyondSection";
import VisionPro from "./components/Visionpro";

function App() {
  return (
    <div className="App">
      <Nav />
      <VisionPro />
      <Jumbotron/>
      <BeyondSection/>
      <Gallery />

    </div>
  );
}

export default App;
