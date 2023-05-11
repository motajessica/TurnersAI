import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Card from "./components/Card.js";
import Hero from "./components/Hero.js";
import UploadImage from "./components/UploadImage.js";
import Chatbot from "./components/Chatbot.js";
import { carDb } from "./db/carDb.js";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader.js";

import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [cars, setCars] = useState(carDb);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [showResultsFoundMessage, setShowResultsFoundMessage] = useState(false);
  const handleCategoryChange = function (category) {
    const filteredCars = carDb.filter((car) => car.category === category);
    setError(null);
    setCars(filteredCars);
    setSelectedCategory(category);
    setShowResultsFoundMessage(true);
  };

  const handleSearching = function (isSearching) {
    setError(null);
    setIsSearching(isSearching);
  };

  function handleInvalidImage(message) {
    setCars([]);
    setError(message);
    setShowResultsFoundMessage(false);
  }
  return (
    <div>
      <Header />
      <Hero />
      <div>
        <UploadImage
          onCategoryChange={handleCategoryChange}
          onInvalidImage={handleInvalidImage}
          setIsSearching={handleSearching}
        />
        <div className="container mt-5 text-center">
          {showResultsFoundMessage && <h2>Showing {selectedCategory} cars</h2>}
        </div>
      </div>
      <div className="container">
        <div className="d-flex py-4 flex-wrap justify-content-center">
          {isSearching ? (
            <ClipLoader loading={isSearching} />
          ) : (
            cars.map(function (car) {
              return <Card car={car} />;
            })
          )}
          {error && (
            <p className="alert alert-danger fw-bold container" role="alert">
              {error}
            </p>
          )}
        </div>
      </div>
      <Chatbot />
      <Footer />
    </div>
  );
};

export default App;
