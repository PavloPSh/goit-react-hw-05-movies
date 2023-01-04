import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getFilmReview } from "services/filmApi";
import { Loader } from "components/loader/Loader";



export const Reviews = () => {

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

    const isReviews = review.length === 0 || error;

    return (
        <>
            {loading && <Loader />}
            {isReviews && <p>Ooops...</p>}
            <ul>
                {review.map(({ id, author, content }) => (<li key={id}>
                    <p>{author}</p>
                    <p>{content}</p>
                </li> ))}
            </ul>
        </>
    )
}