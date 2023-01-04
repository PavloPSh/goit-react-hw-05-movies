import { useState, useEffect } from "react";
import { getTrandingFilms } from "services/filmApi";
import { TrandingList } from "components/trandingList/TrandingList";
import { Loader } from "components/loader/Loader";

import { Box } from "Box";


export const Home = () => {

    const [tranding, setTranding] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);



    useEffect(() => {
        const getTranding = async () => {

            setLoading(true);

            try {
                const data = await getTrandingFilms();

                setTranding([...data])
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        getTranding();
    }, []);


    const isTranding = tranding.length !== 0;

    return (
        <Box p='32px' pt='0' >
            
            <h2>Tranding today:</h2>
            {loading && <Loader />}
            {error && <div>Something went wrong...</div>}
            {isTranding && <TrandingList data={tranding} />}
            
            
        </Box>
    )
};