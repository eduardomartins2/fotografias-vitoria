import styled from "styled-components";

export const Foot = styled.footer`
    display: flex;
    background-color: #2F1F1F;
    justify-content: center;
    align-items: center;
    color: #EFEFED;
    padding: 2.5rem;
    gap: 2rem;
    font-weight: normal;
    font-size: 1.2rem;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
        font-size: 1.1rem;
        padding: 2rem;
    }

    .footer-text {
        color: #EFEFED;
        margin: 0;
    }

    a {
        color: #EFEFED;
        text-decoration: none;
        cursor: pointer;
        font-weight: 600;
        transition: color 0.3s ease;

        &:hover {
            color: #ff6b6b;
            text-decoration: underline;
        }
    }
`;