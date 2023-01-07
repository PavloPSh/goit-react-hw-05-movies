import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { GlobalStyles } from "GlobalStyles";
import { ToastContainer } from "react-toastify";

import { Layout } from "./layout/Layout";

const HomePage = lazy(() => import('../pages/homePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/moviesPage/MoviesPage'));
const MoviesDetailsPage = lazy(() => import('../pages/detailsPage/MoviesDetailsPage'));
const Cast = lazy(() => import('../components/cast/Cast'));
const Reviews = lazy(() => import('../components/reviews/Reviews'));
const PageNotFound = lazy(()=>import('../pages/notFoundPage/PageNotFound'))



export const App = () => {
  return (
    <>
      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<HomePage />} />

          <Route path="movies" element={<MoviesPage />} />

          <Route path="movies/:movieId" element={<MoviesDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />

        </Route>  

      </Routes>
      
      <ToastContainer autoClose={1500}/>
      <GlobalStyles />
    </>
  );
};
