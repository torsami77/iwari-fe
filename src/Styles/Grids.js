import styled from "styled-components";

export const VideoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.2rem;

    @media screen and (max-width: 870px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

export const Grid = styled.div `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.2rem;

    @media screen and (max-width: 870px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;