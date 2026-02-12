import styled from 'styled-components';

export const ServicesSection = styled.section`
  padding: 3rem 5%;
  background: #ffffff;
  text-align: center;

  h2 {
    font-size: 2rem;
    color: #2c2c2c;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  p {
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 768px) {
    padding: 2rem 5%;

    h2 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const ServiceCard = styled.div`
  background: #f8f9fa;
  padding: 2rem 1.5rem;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #e9ecef;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    border-color: #ff6b6b;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

export const ServiceIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  display: none;

  @media (min-width: 769px) {
    display: block;
  }
`;

export const ServiceTitle = styled.h3`
  font-size: 1.3rem;
  color: #2c2c2c;
  margin-bottom: 1rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const ServiceDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: #666;
  margin-bottom: 1.5rem;
  min-height: 70px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    min-height: auto;
  }
`;

export const ServiceLink = styled.span`
  color: #ff6b6b;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #ee5a24;
  }
`;
