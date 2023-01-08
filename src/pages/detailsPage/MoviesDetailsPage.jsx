
import { useState, useEffect, Suspense } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";

import { getFilmsById } from "services/filmApi";

import { Loader } from "components/loader/Loader";

import { Box } from "Box";
import { GoBackButton, LinkButton } from "./MoviesDetails.styled";

const MoviesDetailsPage = () => {
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
    
    

    
    
    const { title, poster_path, overview, release_date, vote_average, genres } = state;
    
    // if (!state) return null;
    const isNoData = state.length === 0 && error && !loading;
    const isGenres = genres !== undefined;
    const isHasInfo = state.length !== 0 && !error && !loading;
    

    const backLink = location.state?.from ?? '/movies';
    

    return (
        <Box p='32px' pt='0'>

            
            <Link to={backLink}> <GoBackButton>Go back</GoBackButton> </Link>

            {loading && <Loader />}

            {isNoData && <Box as='h3' display='flex' justifyContent='center' pt='32px'>Ooops...There is no movie detail info yet</Box>}

            {isHasInfo &&
                <Box display='flex' mt='32px'>
                    <Box as='img' mr='32px' src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} /> 
                    <Box display='flex' flexDirection='column' gridGap='16px'>
                        <h2>{title}</h2>
                        <p>Overview: {overview}</p>
                        <p>Release date: {release_date ?? `2022`}</p> 
                        <p>Rating: {vote_average}</p>
                        {isGenres && <p>Genres: {genres.map(({ name }) => `${name}`).join(', ')}</p>}
                        
                    </Box>    
                </Box>} 
            {isHasInfo && 
                <Box display='flex' justifyContent='center' mt='32px' gridGap='16px'>
                    <Link to='cast' state={{from: backLink}}> <LinkButton>Cast</LinkButton> </Link>
                    <Link to='reviews' state={{from: backLink}}> <LinkButton>Reviews</LinkButton> </Link>
                </Box>}
            <Suspense>
                <Outlet />
            </Suspense>
            
        </Box>
    )
}

export default MoviesDetailsPage;