import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background: #f8f5f4 ;
  background-size: cover;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

export const Head = styled.div`
  background: #f8f5f4 ;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  padding: 1rem 0;

  @media (max-width: 768px) {
    margin-top: 1rem;
    padding: 0.5rem 0;
  }
`;

export const Title = styled.p`
color: #2F1F1F;
font-size: 1.2rem;
margin-bottom: -0.5rem;
font-weight: bold ;

@media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: -0.3rem;
}
`;

export const Fotografia = styled.h1`
color: #2F1F1F;
font-size: 3rem;
margin: unset;
font-weight: 700;

@media (max-width: 768px) {
    font-size: 2.2rem;
    margin-left: 0;
}

@media (max-width: 480px) {
    font-size: 1.8rem;
}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;