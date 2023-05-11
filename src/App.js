import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Card from "./components/Card.js";
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
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const handleCategoryChange = function(category) {
    const filteredCars = carDb.filter(car => car.category === category);
    setError(null)
    setCars(filteredCars);
    setSelectedCategory(category);
    setShowMessage(true);
  }

  const handleSearching = function(isSearching) {
    setError(null)
    setIsSearching(isSearching)
  }

  function handleInvalidImage(message) {
    console.log("ERROR")
    setCars([]);
    setError(message); 
    setShowMessage(false);
  }
  return (
    <div>
      <Header />
      <Hero />  
      <div className="">
          <UploadImage onCategoryChange={handleCategoryChange} onInvalidImage={handleInvalidImage} setIsSearching={handleSearching} />
          <div className="container mt-5 text-center">
           {showMessage && <h2>{selectedCategory} cars</h2>}
          </div>
      </div>
      <div className="container">
      
     
          <div className="d-flex py-4 flex-wrap justify-content-center">
            { 
              isSearching 
              ?
              <p>Now I am serarching your car category</p>
              :
              cars.map(function (car) {
                return <Card car={car} />;
              })
            }
            {
              error 
                && 
              <p className="alert alert-danger container" role="alert">{error}</p>
            } 
        
        </div>
      </div>
        <Chatbot />
        <Footer />
    </div>
  );
};

export default App;
