import { useState,useEffect } from "react"
import { useParams } from "react-router-dom";
import { getFilmsCast } from "services/filmApi";
import { Loader } from "components/loader/Loader";

import { Box } from "Box";
import { CastBox, CastItem,  } from "./Cast.styled";

const Cast = () => {

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

    const isCast = cast.length !== 0;
    const isNoCast = cast.length === 0 && error && !loading;

    return (
        <>
            {loading && <Loader />}
            {isNoCast && <Box as='p' display='flex' justifyContent='center' pt='32px'>Ooops...There is no cast info yet</Box>}
            {isCast &&
                <CastBox>
                    {cast.map(({ character, id, name, profile_path }) => (
                        
                        <CastItem key={id}>
                            <Box as='img' borderRadius='6px' src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={name} />
                            <Box p='8px'>
                                <p>Name: {name}</p>
                                <p>Character: {character}</p>
                            </Box>
                        </CastItem>))}
                </CastBox>}
        </>
    )
}

export default Cast;