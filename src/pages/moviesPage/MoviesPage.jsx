import { Searchbar } from "components/searchbar/Searchbar"
import { useState,useEffect } from "react"
import { useSearchParams } from "react-router-dom";
import { getSearchFilms } from "services/filmApi"
import { TrandingList } from "components/trandingList/TrandingList";
import { Loader } from "components/loader/Loader";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Box } from "Box";

const MoviesPage = () => {

    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const queryString = searchParams.get('query') ?? '';

    const updateQueryString = (query) => {
        const nextQuery = query !== '' ? { query } : {};
        setSearchParams(nextQuery)
    }


    useEffect(() => {

        if (queryString === '') {
            return
        }
        
        const getSearch = async () => {

            setLoading(true);
            setError(null);
    
            try {

                const data = await getSearchFilms(queryString);

                if (data.length === 0) {
                    setMovies([])
                    return toast.error('Try to find something else...');
                }

                setMovies(data);
                
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        getSearch();
    }, [queryString]);
    
    


    return (
        <Box p='32px' pt='0'>

            {loading && <Loader />}
            
            {error && <div>Something went wrong...</div>}

            <Searchbar value={queryString} onSubmit={updateQueryString} />
            
            <TrandingList data={movies} />

        </Box>
    )
}

export default MoviesPage;