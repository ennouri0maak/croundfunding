import React from "react";
import MovieRating from "./importance";
import "../src/styles.css"
const MoviesCard = ({ movies }) => {
  return movies.map((el, key) => {
    return (
      <div className="movie-card col-lg-3" key={key}>
        <div className="stars-rating">
          <MovieRating rating={el.rating} />
        </div>
        <figure>
          <img src={el.image} alt={el.name} />
        </figure>
        <h1>
          {el.name} <span>{el.year}</span>
        </h1>
        <a className="suprtbtn" href="javascript:void( window.open( 'https://www.paypal.com/paypalme/aminenouri', 'blank', 'scrollbars=yes, toolbar=yes, width=700, height=500' ) ) "> I support </a>
      
      
      </div>
    );
  });
};
export default MoviesCard;