import styled from 'styled-components';

export const AboutSection = styled.section`
    display: flex;
    align-items: center;
    background-color: #EFEFED;
    color: #2F1F1F;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const PhotoContainer = styled.div`
    border-radius: 50%;
    width: 150px;
    height: 150px;
    margin-right: 20px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const AboutText = styled.div`
    font-size: 1.2em;
    line-height: 1.5;

    h2 {
        margin-bottom: 10px;
        font-weight: bold;
    }
`;
