import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
    color: ${p => p.theme.colors.black};
    &.active{
        color: ${p => p.theme.colors.primary};
    }
    text-decoration: none;
    text-transform: uppercase;
`;

export const StyledNavBox = styled.ul`
    display: flex;
    list-style: none;
    justify-content: center;
    gap: ${p => p.theme.space[6]}px;

`;