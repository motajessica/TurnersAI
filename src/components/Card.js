import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function Card({ car }) {
  return (
    <div>
      <div className="card bg-light m-2">
        <img
          src={`/images/${car.image}.jpg`}
          alt="..."
          className="card-img-top"
          style={{ height: "12rem" }}
        />
        <div class="card-body">
          <h4 class="card-title">{car.model}</h4>
          <h6 class="card-text">Model: {car.model}</h6>
          <h6 class="card-text">Make: {car.make}</h6>
          <h6 class="card-text">Year: {car.year}</h6>
          <h6 class="card-text">Price: {car.price}</h6>
          <h6 class="card-text">Category: {car.category}</h6>
          <a href="/" className="text-decoration-none fw-bold">
            See more
          </a>
        </div>
      </div>
    </div>
  );
}
export default Card;
