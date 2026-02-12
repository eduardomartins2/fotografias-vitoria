import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 5%;
    text-align: center;
    min-height: auto;
  }
`;

export const HeroContent = styled.div`
  flex: 1;
  max-width: 600px;
  z-index: 2;
  animation: ${fadeInUp} 1s ease-out;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #2c2c2c;
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: #666;
  margin-bottom: 2rem;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const HeroDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const CTAButton = styled.a`
  display: inline-block;
  padding: 1rem 2.5rem;
  background: linear-gradient(45deg, #ff6b6b, #ee5a24);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(238, 90, 36, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(238, 90, 36, 0.4);
    background: linear-gradient(45deg, #ee5a24, #ff6b6b);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.9rem 2rem;
  }
`;

export const HeroImage = styled.div`
  flex: 1;
  max-width: 500px;
  animation: ${fadeIn} 1.5s ease-out;

  img {
    width: 100%;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    max-width: 300px;
  }
`;
