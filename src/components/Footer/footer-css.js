import styled from "styled-components";

export const Foot = styled.footer`
    display: flex;
    background-color: #2F1F1F;
    justify-content: space-evenly;
    color: #EFEFED;
    padding: 2rem;
    align-items: center;
    font-weight: normal;
    font-size: medium;

    .footer-link {
        color: #EFEFED;
        text-decoration: none;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
`;