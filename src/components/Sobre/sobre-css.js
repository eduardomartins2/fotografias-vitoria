import styled from 'styled-components';

export const AboutSection = styled.section`
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    color: #2F1F1F;
    padding: 4rem 5%;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    margin: 2rem 5%;
    gap: 3rem;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 2rem;
        margin: 1rem;
    }
`;

export const PhotoContainer = styled.div`
    border-radius: 20px;
    width: 40%;
    min-width: 300px;
    overflow: hidden;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 768px) {
        width: 100%;
        min-width: auto;
        margin-bottom: 2rem;
    }
`;

export const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;

export const AboutText = styled.div`
    flex: 1;
    font-size: 1.1rem;
    line-height: 1.8;

    h2 {
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
        font-weight: 700;
        color: #2c2c2c;

        @media (max-width: 768px) {
            font-size: 2rem;
        }
    }

    p {
        margin-bottom: 1.5rem;
        color: #555;

        strong {
            color: #ff6b6b;
            font-weight: 600;
        }
    }
`;

export const Redes = styled.div`
    display: flex;
    gap: 1.5rem;
    margin-top: 2rem;

    a {
        transition: transform 0.3s ease;

        &:hover {
            transform: scale(1.1);
        }
    }
`;

export const StatsContainer = styled.div`
    display: flex;
    gap: 2rem;
    margin: 2rem 0;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        justify-content: center;
        gap: 1.5rem;
    }
`;

export const StatItem = styled.div`
    text-align: center;
    background: white;
    padding: 1.5rem;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    min-width: 120px;

    strong {
        display: block;
        font-size: 2rem;
        color: #ff6b6b;
        margin-bottom: 0.5rem;
    }

    span {
        font-size: 0.9rem;
        color: #666;
    }
`;