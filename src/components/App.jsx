import { Route, Routes } from "react-router-dom";

import { Layout } from "./layout/Layout";
import { Home } from "pages/homePage/HomePage";
import { MoviesPage } from "pages/moviesPage/MoviesPage";
import { MoviesDetailsPage } from "pages/detailsPage/MoviesDetailsPage";
import { Cast } from "./cast/Cast";
import { Reviews } from "./reviews/Reviews";

import { GlobalStyles } from "GlobalStyles";


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />

          <Route path="movies" element={<MoviesPage />} />

          <Route path="movies/:movieId" element={<MoviesDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

        </Route>  
      </Routes>
      
      <GlobalStyles />

    </>
  );
};
