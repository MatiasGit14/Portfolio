import React, { Component } from "react";
import imagenPrueba from "../assets/images/cinema.png";
import imagenPrueba2 from "../assets/images/popcorn.jpg";

class Cards extends Component {
  render() {
    return (
      <div className="positionCards">
        <div className="card bg-dark text-white">
          <img src={imagenPrueba} className="card-img" alt="peliculas" />
          <div className="card-img-overlay">
            <h5 className="card-title">Proyecto 1</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">Last updated 3 mins ago</p>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="card bg-dark text-white">
          <img src={imagenPrueba2} className="card-img" alt="peliculas" />
          <div className="card-img-overlay">
            <h5 className="card-title">Proyecto 2</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">Last updated 3 mins ago</p>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="card bg-dark text-white">
          <img src={imagenPrueba} className="card-img" alt="peliculas" />
          <div className="card-img-overlay">
            <h5 className="card-title">Proyecto tres</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">Last updated 3 mins ago</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
