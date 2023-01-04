import { Searchbar } from "components/searchbar/Seatchbar"
import { useState,useEffect } from "react"
import { useSearchParams } from "react-router-dom";
import { getSearchFilms } from "services/filmApi"
import { TrandingList } from "components/trandingList/TrandingList";
import { Loader } from "components/loader/Loader";

export const MoviesPage = () => {

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
        <>
            {loading && <Loader />}
            
            {error && <div>Something went wrong...</div>}

            <Searchbar value={queryString} onSubmit={updateQueryString} />
            
            <TrandingList data={movies} />
        </>
    )
}