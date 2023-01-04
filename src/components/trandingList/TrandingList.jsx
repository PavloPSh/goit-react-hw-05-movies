import { Link, useLocation } from "react-router-dom";

import { MovieItem, MovieItemInfo,MovieList } from "./TrandingList.styled";

export const TrandingList = ({ data }) => {

    const location = useLocation();

    return (
        <MovieList>
            {data.map(({ id, title, name, poster_path, overview, release_date, vote_average }) => (
                <MovieItem key={id}>
                    
                        <Link to={`/movies/${id}`} state={{ from: location }}>
                            <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt={name} />
                            
                        </Link>
                        <MovieItemInfo>
                            <Link to={`/movies/${id}`} state={{ from: location }}><h2>{title ?? name}</h2></Link>
                            <p>Overview: {overview}</p>
                            <p>Release date: {release_date}</p>
                            <p>Rating: {vote_average}</p>
                        </MovieItemInfo>
                    
                    
                </MovieItem>))}
        </MovieList>
    )
};