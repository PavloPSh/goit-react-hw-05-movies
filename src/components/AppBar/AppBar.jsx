import { Box } from "Box";

import { StyledNavLink, StyledNavBox } from "./AppBarItem.styled";



const navItems = [
    { href: '/', text: 'Home' },
    { href: '/movies', text: 'Movies' },
];

export const AppBar = () => {
    return (
        <Box p='16px' bg='#b6b6b6'>
            <StyledNavBox>
                {navItems.map(({ href, text }) =>
                    <li key={href}>
                        <StyledNavLink to={href}>{text}</StyledNavLink>
                    </li>)}
            </StyledNavBox>
        </Box>
    )
}
