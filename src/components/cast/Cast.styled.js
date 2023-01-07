import styled from "styled-components";

export const CastBox = styled.ul`
    padding-top: ${p => p.theme.space[5]}px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: ${p => p.theme.space[4]}px;
`;

export const CastItem = styled.li`
    border: ${p => p.theme.borders.card};
    border-radius: ${p => p.theme.radii.sm};
    width: 202px;
`;

