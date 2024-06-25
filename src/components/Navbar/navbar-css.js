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

    @media (max-width: 768px) {
        font-size: unset;
    }
`;

export const MenuItem = styled.div`
    position: relative;
    padding: 1rem;
    cursor: pointer;
    color: #EFEFED;
    border-radius: 1.5rem;
    &:hover {
        background-color: #EFEFED;
        color: #2F1F1F;
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
`;

export const SubMenuItem = styled.div`
    padding: 1rem;
    color: #EFEFED;
    cursor: pointer;
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
