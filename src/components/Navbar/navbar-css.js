import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    background-color: #2F1F1F;
    justify-content: space-evenly;
    color: #EFEFED;
    padding: 1.2rem;
    align-items: center;
    font-weight: normal;
    font-size: 1.2rem;
    flex-wrap: wrap;
    gap: 1rem;

    @media (max-width: 768px) {
        font-size: 1.1rem;
        padding: 1rem;
        gap: 0.8rem;
    }

    @media (max-width: 480px) {
        font-size: 1rem;
        padding: 0.8rem;
        gap: 0.6rem;
    }
`;

export const MenuItem = styled.div`
    position: relative;
    padding: 1rem 1.2rem;
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
        padding: 0.9rem 1.1rem;
    }

    @media (max-width: 480px) {
        padding: 0.8rem 1rem;
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
    padding: 1rem 1.2rem;
    color: #EFEFED;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
        background-color: #EFEFED;
        color: #2F1F1F;
    }

    @media (max-width: 480px) {
        padding: 0.9rem 1.1rem;
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
