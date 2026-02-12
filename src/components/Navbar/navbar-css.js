import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    background-color: #2F1F1F;
    justify-content: space-evenly;
    color: #EFEFED;
    padding: 1rem;
    align-items: center;
    font-weight: normal;
    font-size: large;
    flex-wrap: wrap;
    gap: 0.5rem;

    @media (max-width: 768px) {
        font-size: unset;
        padding: 0.8rem;
    }
`;

export const MenuItem = styled.div`
    position: relative;
    padding: 1rem;
    cursor: pointer;
    color: #EFEFED;
    border-radius: 1.5rem;
    transition: all 0.3s ease;
    
    &:hover {
        background-color: #EFEFED;
        color: #2F1F1F;
        transform: translateY(-2px);
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
`;

export const SubMenuItem = styled.div`
    padding: 1rem;
    color: #EFEFED;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
        background-color: #EFEFED;
        color: #2F1F1F;
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

export const ContactButton = styled.a`
    background: linear-gradient(45deg, #ff6b6b, #ee5a24);
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 25px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(238, 90, 36, 0.3);

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(238, 90, 36, 0.4);
        background: linear-gradient(45deg, #ee5a24, #ff6b6b);
    }

    @media (max-width: 768px) {
        padding: 0.6rem 1.2rem;
        font-size: 0.9rem;
    }
`;
