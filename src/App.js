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
{model: "CX-5", category: "suv", make: "Mazda", year: "2019", price: "23000", image: "suv"},
{model: "Highlander", category: "suv", make: "Toyota", year: "2022", price: "36000", image: "suv"},
{model: "Rogue", category: "suv", make: "Nissan", year: "2017", price: "18000", image: "suv"},
{model: "Civic", category: "hatchback", make: "Honda", year: "2020", price: "24000", image: "hatchback"},
{model: "Golf GTI", category: "hatchback", make: "Volkswagen", year: "2018", price: "27000", image: "hatchback"},
{model: "i30 N", category: "hatchback", make: "Hyundai", year: "2021", price: "32000", image: "hatchback"},
{model: "Camry", category: "sedan", make: "Toyota", year: "2019", price: "25000", image: "sedan"},
{model: "Accord", category: "sedan", make: "Honda", year: "2022", price: "32000", image: "sedan"},
{model: "Altima", category: "sedan", make: "Nissan", year: "2018", price: "19000", image: "sedan"},
{model: "Sienna", category: "van", make: "Toyota", year: "2020", price: "28000", image: "van"},
{model: "Odyssey", category: "van", make: "Honda", year: "2021", price: "33000", image: "van"},
{model: "Sprinter", category: "van", make: "Mercedes-Benz", year: "2019", price: "45000", image: "van"},
{model: "Miata", category: "convertible", make: "Mazda", year: "2017", price: "23000", image: "convertible"},
{model: "Z4", category: "convertible", make: "BMW", year: "2021", price: "54000", image: "convertible"},
{model: "Mustang", category: "convertible", make: "Ford", year: "2018", price: "32000", image: "convertible"},
{model: "F-150", category: "utility", make: "Ford", year: "2020", price: "40000", image: "utility"},
{model: "Silverado", category: "utility", make: "Chevrolet", year: "2019", price: "38000", image: "utility"},
{model: "Ram 1500", category: "utility", make: "Dodge", year: "2022", price: "43000", image: "utility"}

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
