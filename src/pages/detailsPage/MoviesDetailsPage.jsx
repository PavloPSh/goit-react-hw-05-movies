
import { useState, useEffect } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom"

import { getFilmsById } from "services/filmApi";

import { Loader } from "components/loader/Loader";

export const MoviesDetailsPage = () => {
    const [state, setState] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const { movieId } = useParams();

    const location = useLocation()
    
   
    
    
    useEffect(() => {
        const getMovie = async () => { 
            
            try {
                setLoading(true);
                setError(null);

                const movieData = await getFilmsById(movieId);
                setState(movieData);
                
            } catch (error) {
                setError(error)
            } finally { 
                setLoading(false);
            }

        } 
        getMovie();
    }, [movieId])
    
    

    if (!state) return null;
    const { title, poster_path } = state;

    console.log(state);
    

    const backLink = location.state?.from ?? '/movies';
    

    return (
        <>
            <Link to={backLink}>Go back</Link>
            {loading && <Loader />}
            {error && <p>Ooops...</p>}
            {state &&
                <div>
                    {title}
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={ title } />
                </div>}
            <div>
                <Link to='cast' state={{from: backLink}}>Cast</Link>
                <Link to='reviews' state={{from: backLink}}>Reviews</Link>
            </div>
            <Outlet />
            
        </>
    )
}