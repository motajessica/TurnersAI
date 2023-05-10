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
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const handleCategoryChange = function(category) {
    const filteredCars = carDb.filter(car => car.category === category);
    setCars(filteredCars);
    setSelectedCategory(category);
    setShowMessage(true);
  }
  
  function handleInvalidImage(message) {
    setCars([]);
    setError(message); 
    setShowMessage(false);
  }
  return (
    <div>
      <Header />
      <Hero />  
      <div className="">
        <Search />
          <UploadImage onCategoryChange={handleCategoryChange} onInvalidImage={handleInvalidImage}/>
          <div className="container mt-5 text-center">
           {showMessage && <h1>{selectedCategory} cars</h1>}
          </div>
      </div>
      <div className="container">
      
        <div className="d-flex py-4 flex-wrap justify-content-center">
          {cars.map(function (car) {
            return <Card car={car} />;
          })}
          {
            error 
              && 
            <h3 className="alert alert-danger container" role="alert">{error}</h3>
          }
        </div>
      </div>
        <Chatbot />
        <Footer />
    </div>
  );
};

export default App;
