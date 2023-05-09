import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Card from "./components/Card.js";
import Search from "./components/Search.js";
import Hero from "./components/Hero.js";
import UploadImage from "./components/UploadImage.js";
import Chatbot from "./components/Chatbot.js"
import { useState, useEffect } from 'react';

import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const cardDb = [
  {model: "", category: "suv", make: "", year: "", price: "", image: "suv"},
  {model: "", category: "suv", make: "", year: "", price: "", image: "suv"},
  {model: "", category: "suv", make: "", year: "", price: "", image: "suv"},
  {model: "", category: "hatchback", make: "", year: "", price: "", image: "hatchback"},
  {model: "", category: "hatchback", make: "", year: "", price: "", image: "hatchback"},
  {model: "", category: "hatchback", make: "", year: "", price: "", image: "hatchback"},
  {model: "", category: "sedan", make: "", year: "", price: "", image: "sedan"},
  {model: "", category: "sedan", make: "", year: "", price: "", image: "sedan"},
  {model: "", category: "sedan", make: "", year: "", price: "", image: "sedan"},
  {model: "", category: "van", make: "", year: "", price: "", image: "van"},
  {model: "", category: "van", make: "", year: "", price: "", image: "van"},
  {model: "", category: "van", make: "", year: "", price: "", image: "van"},
  {model: "", category: "convertible", make: "", year: "", price: "", image: "convertible"},
  {model: "", category: "convertible", make: "", year: "", price: "", image: "convertible"},
  {model: "", category: "convertible", make: "", year: "", price: "", image: "convertible"},
  {model: "", category: "utility", make: "", year: "", price: "", image: "utility"},
  {model: "", category: "utility", make: "", year: "", price: "", image: "utility"},
  {model: "", category: "utility", make: "", year: "", price: "", image: "utility"},
]

const App = () => {
  const [cars, setCars] = useState(cardDb);
  const handleCategoryChange = function(category) {
    const filteredCars = cardDb.filter(car => car.category === category)
    setCars(filteredCars)
  }

  function handleInvalidImage(message) {

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
        </div>
      </div>
        <Chatbot />
        <Footer />
    </div>
  );
};

export default App;
