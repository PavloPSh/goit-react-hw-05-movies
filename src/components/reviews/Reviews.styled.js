import styled from "styled-components";

export const ReviewItem = styled.li`
    padding: ${p => p.theme.space[4]}px;
    margin-bottom: ${p => p.theme.space[4]}px;
    border: ${p => p.theme.borders.card};
    border-radius: ${p => p.theme.radii.sm};
`;