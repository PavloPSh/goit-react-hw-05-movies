import { Link, useLocation } from "react-router-dom"

import { Box } from "Box";
import { GoBackButton } from "pages/detailsPage/MoviesDetails.styled";


export const PageNotFound = () => {

    const location = useLocation();
    const backLink = location.state?.from ?? '/movies';

    return (
        <>
            <Box as='h3' display='flex' justifyContent='center' pt='32px'>Oh...it's a wrong page</Box>
            <Box display='flex' justifyContent='center'>
                <Link to={backLink}>
                    <GoBackButton>Go back</GoBackButton>
                </Link>
            </Box>   
        </>
    )
}