import { useState, useEffect } from "react";
import { getTrandingFilms } from "services/filmApi";
import { TrandingList } from "components/trandingList/TrandingList";
import { Loader } from "components/loader/Loader";

import { Box } from "Box";


const HomePage = () => {

    const [tranding, setTranding] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);



    useEffect(() => {
        const getTranding = async () => {

            setLoading(true);
            setError(null);

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


    const isTranding = tranding.length > 0;
    const isNoTranding = tranding.length === 0 && error && !loading;

    return (
        <Box p='32px' pt='0' >
            
            <Box as='h2' pt='32px'>Tranding today:</Box>
            {loading && <Loader />}
            {isNoTranding && <Box as='h3' display='flex' justifyContent='center' pt='32px'>Something went wrong...</Box>}
            {isTranding && <TrandingList data={tranding} />}
             
        </Box>
    )
};

export default HomePage;