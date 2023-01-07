import { Link, useLocation } from "react-router-dom";

import { Box } from "Box";
import { MovieItem, MovieItemInfo,MovieList, MovieLink } from "./TrandingList.styled";

export const TrandingList = ({ data }) => {


    const location = useLocation();

    return (
        <MovieList>
            {data.map(({ id, title, name, poster_path}) => (
                <MovieItem key={id}>
                    
                        <Link to={`/movies/${id}`} state={{ from: location }}>
                            <Box as='img' borderRadius='6px' src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt={name} />
                            
                        </Link>
                        <MovieItemInfo>
                            <Box as='h2'  >
                                <MovieLink to={`/movies/${id}`} state={{ from: location }}>{title ?? name}</MovieLink>
                            </Box>
                        </MovieItemInfo>
                    
                    
                </MovieItem>))}
        </MovieList>
    )
};