import { InfinitySpin } from "react-loader-spinner";
import { LoaderBox } from "./Loader.styled";

export const Loader = () => {
    return (
        <LoaderBox>
            <InfinitySpin width='200' color="#3f51b5" />
        </LoaderBox>
    )
}