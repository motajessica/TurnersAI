import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Hero() {
  return (
    <div className="hero-background">
      <div
        className="hero-img mb-5 p-5 bg-image"
        style={{ backgroundImage: "url('/images/tina copy.jpg')", height: 400}}
        > 
      </div>
    </div>
  );
}

export default Hero;
