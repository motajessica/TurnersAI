import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

function Hero() {
  return (
    // <div className="hero-background">
    //   <div
    //     className="mb-5 p-5 bg-image text-white"
    //     style={{ backgroundImage: "url('https://img2.icarros.com/principal/v2/images/banner-icarros-bg-desk.jpg')", height: 600}}
    //     >
    //     <h1 className="">Find the car you love today</h1>
    //     <h3 className=""></h3>
    //     <div className="hero--search">
    //      <Search />
    //     </div>
       
    //   </div>
    // </div>

    // "url('/images/bread.jpg')",

    <div
    className="hero-img mb-5 p-5 text-center bg-image"
    style={{ backgroundImage: "url('https://img2.icarros.com/principal/v2/images/banner-icarros-bg-desk.jpg')", height: 600 }}
    >
      <div className="py-5 hero-mask">
        <h2 className="hero-title d-flex flex-column justify-content-center container">
          Find the car you love today
        </h2>
        <div className="hero-subtitle container pt-4">
          <h5 className="mt-5">
            Download the app for free.
          </h5>
          <button
            type="button"
            class="btn btn-dark btn-md download-button me-2"
            >
            <FontAwesomeIcon icon={faGooglePlay} /> Download
          </button>
          <button
            type="button"
            class="btn btn-light btn-md download-button"
            >
            <FontAwesomeIcon icon={faApple} className="" /> Download
          </button>  
         <div className="hero--search">
          <Search />
         </div>
                 
        </div>
      </div>
    </div>





  );
}

export default Hero;
