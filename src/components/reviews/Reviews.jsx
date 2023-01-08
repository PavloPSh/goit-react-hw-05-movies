import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getFilmReview } from "services/filmApi";
import { Loader } from "components/loader/Loader";

import { Box } from "Box";
import { ReviewItem } from "./Reviews.styled";



const Reviews = () => {

    const [review, setReview] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const { movieId } = useParams();

    useEffect(() => {
        const getReview = async () => {
            try {
                setLoading(true);
                setError(null);

                const movieReview = await getFilmReview(movieId);
                setReview(movieReview);

            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        getReview();

    }, [movieId]);


    const isReviews = review.length !== 0;
    const isNoReviews = review.length === 0 && !error && !loading;

    return (
        <>
            {loading && <Loader />}
            {isNoReviews && <Box as='p' display='flex' justifyContent='center' pt='32px'>Ooops...There is no reviews yet</Box>}
            {isReviews &&
                <Box as='ul' pt='32px'>
                    {review.map(({ id, author, content }) => (
                        <ReviewItem key={id}>
                            <Box as='h4' mb='16px'>Autor: {author}</Box>
                            <p>{content}</p>
                        </ReviewItem> ))}
                </Box>}
        </>
    )
}

export default Reviews;