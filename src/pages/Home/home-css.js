import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background: #f8f5f4 ;
  background-size: cover;

  display: flex;
  flex-direction: column;
  gap: 40px;

`;

export const Head = styled.div`
  background: #f8f5f4 ;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 35px;
`;

export const Title = styled.p`
color: #2F1F1F;
font-size: 20px;
margin-bottom: -20px;
font-weight: bold ;
`;

export const Fotografia = styled.h1`
color: #2F1F1F;
font-size: 80px;
margin: unset;
background: -webkit-linear-gradient(left, black 43%, #2F1F1F 20%);
background-clip: text;
-webkit-background-clip: text;
color: transparent;
-webkit-text-fill-color: transparent;

`

export const StyledLink = styled(Link)`
  text-decoration: none;
`;