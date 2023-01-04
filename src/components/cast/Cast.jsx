import { useState,useEffect } from "react"
import { useParams } from "react-router-dom";
import { getFilmsCast } from "services/filmApi";
import { Loader } from "components/loader/Loader";

export const Cast = () => {

    const [cast, setCast] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const { movieId } = useParams();

    useEffect(() => {
        const getCast = async () => {
            try {
                setLoading(true);
                setError(null);

                const movieCast = await getFilmsCast(movieId);
                setCast(movieCast);

            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        getCast();
    }, [movieId]);

    const isCast = cast.length === 0 || error;

    return (
        <>
            {loading && <Loader />}
            {isCast && <p>Ooops...</p>}
            <ul>
                {cast.map(({ character, id, name, profile_path }) => (
                    
                    <li key={id}>
                        <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={name} />
                        <p>Name: { name }</p>
                        <p>Character: { character }</p>    
                    </li>))}
            </ul>
        </>
    )
}

