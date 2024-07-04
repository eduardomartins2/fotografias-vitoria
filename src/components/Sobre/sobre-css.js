import styled from 'styled-components';

export const AboutSection = styled.section`
    display: flex;
    align-items: center;
    background-color: #EFEFED;
    color: #2F1F1F;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const PhotoContainer = styled.div`
    border-radius: 10%;
    width: 40%;
    height: 50%;
    margin-right: 2rem;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const AboutText = styled.div`
    width: 80%;
    height: 100%;
    font-size: 1.8rem;
    line-height: normal;
    flex-wrap: wrap;
    align-items: center;

    h2 {
        margin-bottom: 1rem;
        font-weight: bold;
    }
`;

export const Redes = styled.div`
    font-size: large;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;