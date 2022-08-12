import React from "react";
import { directors } from "../data";

function Directors() {
  return(
    <div>
      <h1>Diectors Page</h1>
      {directors.map((director) =>
      <div key={director.name}> {director.name} {director.movies.map((movie)=>
      <ul key={movie}> {movie} </ul>)} </div>)}
    </div>
  ) 
}

export default Directors;
