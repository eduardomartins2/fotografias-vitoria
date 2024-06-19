import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    background-color: #2F1F1F;
    justify-content: space-evenly;
    color: #EFEFED;
    padding: 10px;
    align-items: center;
    font-weight: normal;
`;

export const MenuItem = styled.div`
    position: relative;
    padding: 10px;
    cursor: pointer;
    color: #EFEFED;
    border-radius: 15px;
    &:hover {
        background-color: #EFEFED;
        color: #2F1F1F;
    }

    a {
        text-decoration: none;
        color: inherit;
        padding: 1px;
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
    border-radius: 0 0 10px 10px;
    display: ${props => props.visible ? 'block' : 'none'};
`;

export const SubMenuItem = styled.div`
    padding: 10px;
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
