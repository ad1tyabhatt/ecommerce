import "./App.css";
import React from "react";
import { useEffect, useState } from "react";

function App() {
   const [movies, SetMovies] = useState([]);
   const [favourites, setFavourites] = useState([]);
   const [search, setSearch] = useState("");

   const getMovieRequest = async (search) => {
      const url =
         "https://fake-movie-database-api.herokuapp.com/api?s={search}";
      const response = await fetch(url);
      const responseJson = await response.json();

      if (responseJson.Search) {
         SetMovies(responseJson.Search);
      }
   };
   useEffect(() => {
      getMovieRequest(search);
   }, [search]);
   useEffect(() => {
      const movieFavourites = JSON.parse(localStorage.getItem("ecommerce"));
      if (movieFavourites) {
         setFavourites(movieFavourites);
      }
   }, []);
   return (
      <div className="main-container">
         <div className="upper-container">
            <header>
               <div className="movies-heading">Movies</div>
               <div className="searchbar">
                  <form>
                     <label htmlFor="search">
                        <input
                           type="text"
                           name="search"
                           id="searchbar"
                           placeholder="search"
                        />
                     </label>
                  </form>
               </div>
            </header>
         </div>
         <div className="lower-container">
            <div className="movies-heading">Favourites</div>
         </div>
      </div>
   );
}

export default App;
