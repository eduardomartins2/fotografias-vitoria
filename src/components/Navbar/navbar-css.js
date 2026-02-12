import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    background-color: #2F1F1F;
    justify-content: center;
    color: #EFEFED;
    padding: 1rem;
    align-items: center;
    font-weight: normal;
    font-size: large;
    flex-wrap: wrap;
    gap: 0.5rem;

    @media (max-width: 768px) {
        font-size: 0.9rem;
        padding: 0.8rem;
        gap: 0.3rem;
    }

    @media (max-width: 480px) {
        font-size: 0.8rem;
        padding: 0.6rem;
        flex-direction: column;
        gap: 0.2rem;
    }
`;

export const MenuItem = styled.div`
    position: relative;
    padding: 0.8rem 1rem;
    cursor: pointer;
    color: #EFEFED;
    border-radius: 1.5rem;
    transition: all 0.3s ease;
    
    &:hover {
        background-color: #EFEFED;
        color: #2F1F1F;
        transform: translateY(-2px);
    }

    @media (max-width: 768px) {
        padding: 0.6rem 0.8rem;
    }

    @media (max-width: 480px) {
        padding: 0.5rem 0.7rem;
        width: 100%;
        text-align: center;
    }

    a {
        text-decoration: none;
        color: inherit;
        padding: 0.1rem;
        display: block;

        &.active {
            font-weight: bold;
            color: #EFEFED;
        }

        &:hover {
            background-color: #EFEFED;
            color: #2F1F1F;
        }
    }
`;

export const SubMenu = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #2F1F1F;
    border-radius: 0 0 1rem 1rem;
    display: ${props => props.visible ? 'block' : 'none'};
    z-index: 1000;
    min-width: 150px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

    @media (max-width: 480px) {
        position: static;
        width: 100%;
        box-shadow: none;
        background-color: #1a1a1a;
        border-radius: 0;
        display: ${props => props.visible ? 'block' : 'none'};
    }
`;

export const SubMenuItem = styled.div`
    padding: 0.8rem 1rem;
    color: #EFEFED;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
        background-color: #EFEFED;
        color: #2F1F1F;
    }

    @media (max-width: 480px) {
        padding: 0.6rem 0.8rem;
        text-align: center;
    }

    a {
        text-decoration: none;
        color: inherit;
        display: block;

        &.active {
            font-weight: bold;
            color: #EFEFED;
        }

        &:hover {
            background-color: #EFEFED;
            color: #2F1F1F;
        }
    }
`;
