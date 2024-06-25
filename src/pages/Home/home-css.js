import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background: #f8f5f4 ;
  background-size: cover;

  display: flex;
  flex-direction: column;
  gap: 4rem;

`;

export const Head = styled.div`
  background: #f8f5f4 ;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.5rem;
`;

export const Title = styled.p`
color: #2F1F1F;
font-size: 2rem;
margin-bottom: -2rem;
font-weight: bold ;

`;

export const Fotografia = styled.h1`
color: #2F1F1F;
font-size: 8rem;
margin: unset;

@media (max-width: 768px) {
    margin-left: 4rem;
}

`

export const StyledLink = styled(Link)`
  text-decoration: none;
`;