import styled from "styled-components";

export const SearchButton = styled.button`
    background-color: transparent;
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 0;
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
    &:hover{
        opacity: 1;
    }
`;
export const SearchInput = styled.input`
    display: flex;
    width: 350px;
    font: inherit;
    border: none;
    outline: none;
    border-bottom: 1px solid #000;
    font-size: 20px;
    padding-left: 4px;
    padding-right: 4px;
    &:focus{
        border-color: ${p => p.theme.colors.primary};
    }
    &::placeholder{
        font: inherit;
        font-size: 18px;
    }
`;