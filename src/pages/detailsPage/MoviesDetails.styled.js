import styled from "styled-components";

export const GoBackButton = styled.button`
    margin-top: ${p => p.theme.space[5]}px;
    border: ${p => p.theme.borders.item};
    border-radius: ${p => p.theme.radii.sm};
    background-color: ${p => p.theme.colors.white};
    &:hover,
    &:focus{
        box-shadow: ${p => p.theme.shadows.slim};
        border-color: ${p => p.theme.colors.primary};
        color: ${p => p.theme.colors.primary};
    }
`;

export const LinkButton = styled.button`
    border: ${p => p.theme.borders.item};
    border-radius: ${p => p.theme.radii.sm};
    background-color: ${p => p.theme.colors.white};
    font-size: ${p => p.theme.fontSizes.m};
    width: 100px;
    height: 50px;
    &:hover,
    &:focus{
        box-shadow: ${p => p.theme.shadows.slim};
        border-color: ${p => p.theme.colors.primary};
        color: ${p => p.theme.colors.primary};
    }
`