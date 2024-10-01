import {  useLoaderData } from "react-router-dom";

export const MovieDetails = () => {
  const moviesData = useLoaderData();  
  console.log(moviesData);

  const {
    Actors,
    Poster,
    Title,
    Runtime,
    Genre,
    Type,
    Year,
    Plot,
    BoxOffice,
    imdbID,
    Awards,
    imdbRating,
  } = moviesData;

  return (
    <li className="hero-container hero-movie-container">
      <div className="main-container">
        <div className="poster-container">
          <img src={Poster} className="poster" alt={Title} />
        </div>
        <div className="ticket-container">
          <div className="ticket_content">
            
             <h4 className="ticket_movie-title">{Title}</h4>
            <p className="ticket_current-price">Type: {Type}</p>
            <p className="ticket_current-price">Rating: {imdbRating}</p>
            <button className="ticket_buy-btn">Watch now</button>
          </div>
        </div>
      </div>
    </li>
  );
};


