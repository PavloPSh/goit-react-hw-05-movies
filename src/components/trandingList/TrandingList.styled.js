import styled from "styled-components";
import { Link } from "react-router-dom";

export const MovieList = styled.ul`
    padding-top: ${p => p.theme.space[5]}px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

`;

export const MovieItem = styled.li`
    max-width: 344px;
    margin-bottom: ${p=>p.theme.space[5]}px;
    border: ${p=>p.theme.borders.card};
    border-radius: ${p => p.theme.radii.sm};
    
    &:hover{
        box-shadow: ${p => p.theme.shadows.slim};
    }
`;

export const MovieItemInfo = styled.div`
    /* display: flex;
    flex-direction: column;
    gap: ${p=>p.theme.space[5]}px;
    margin-left: ${p=>p.theme.space[4]}px; */
`;

export const MovieLink = styled(Link)`
    color: ${p => p.theme.colors.black};
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${p=>p.theme.space[4]}px;
    &:hover,
    &:focus{
        text-shadow: ${p => p.theme.shadows.text};;
        color: ${p => p.theme.colors.primary};
        outline: none;
    }
`;

