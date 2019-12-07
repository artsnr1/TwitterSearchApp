import React from "react";
import MovieListItem from "./movie-list-item";

function MoviesListPerTab(props) {
  return(
    <div className={"tab-pane fade show " + (props.id === 0 && "active")} 
          id={`v-pills-${props.genre.id}`} 
          role="tabpanel" aria-labelledby={`v-pills-${props.genre.id}-tab`}>
      {/* <div className="card-deck"> */}
      <div className="row">
        {props.movies.map(movie => <MovieListItem movie={movie} key={movie.id}/>)}
      </div>
    </div>
  )
}

export default MoviesListPerTab