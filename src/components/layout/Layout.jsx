import { AppBar } from "components/AppBar/AppBar";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Loader } from "components/loader/Loader";
import { Box } from "Box";

export const Layout = () => {
    return (
        <>
            <AppBar />
            
            <Suspense fallback={ <Box display='flex' justifyContent='center'><Loader /></Box>} >
                <Outlet />
            </Suspense>
        </>
        
    )
};

