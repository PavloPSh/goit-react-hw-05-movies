import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
    color: ${p => p.theme.colors.black};
    &.active{
        color: ${p => p.theme.colors.primary};
    }
    &:hover{
        text-shadow: ${p=>p.theme.shadows.slim};
    }
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 16px;
`;

export const StyledNavBox = styled.ul`
    display: flex;
    list-style: none;
    justify-content: center;
    gap: ${p => p.theme.space[6]}px;

`;