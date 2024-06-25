import styled from "styled-components";

export const Image = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 1rem;
`;

export const Box = styled.div`
    width: calc(33.33% - 10px);
    margin-bottom: 10px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;