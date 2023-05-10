import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Card from "./components/Card.js";
import Search from "./components/Search.js";
import Hero from "./components/Hero.js";
import UploadImage from "./components/UploadImage.js";
import Chatbot from "./components/Chatbot.js";
import { carDb } from './db/carDb.js';
import { useState } from 'react';

import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [cars, setCars] = useState(carDb);
  const [error, setError] = useState("");
  const handleCategoryChange = function(category) {
    const filteredCars = carDb.filter(car => car.category === category)
    setCars(filteredCars)
  }
  function handleInvalidImage(message) {
    setCars([]);
    setError(message); 
  }
  return (
    <div>
      <Header />
      <Hero />  
      <div className="">
        <Search />
          <UploadImage onCategoryChange={handleCategoryChange} onInvalidImage={handleInvalidImage}/>
      </div>
      <div className="container">
        <div className="d-flex flex-wrap justify-content-center">
          {cars.map(function (car) {
            return <Card car={car} />;
          })}
          {error && <h2>{error}</h2>}
        </div>
      </div>
        <Chatbot />
        <Footer />
    </div>
  );
};

export default App;
