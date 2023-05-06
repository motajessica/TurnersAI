import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Cards from "./components/Card.js";
import Search from "./components/Search.js";
import Hero from "./components/Hero.js";
import UploadImage from "./components/UploadImage.js";
import Chatbot from "./components/Chatbot.js"

import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />  
      <div className="">
        <Search />
        <UploadImage />
      </div>

      <div className="container">
        <div className="d-flex flex-wrap justify-content-center">
          {[
            "suv",
            "hatchback",
            "wagon",
            "utility",
            "coupe",
            "sedan1",
            "van",
            "convertible1",
            "utility",
            "suv",
            "coupe",
            "wagon",
          ].map(function (item) {
            return <Cards carType={item} />;
          })}
        </div>
      </div>
        <Chatbot />
        <Footer />
    </div>
  );
};

export default App;
