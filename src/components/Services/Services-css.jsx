import styled from 'styled-components';

export const ServicesSection = styled.section`
  padding: 5rem 5%;
  background: #ffffff;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    color: #2c2c2c;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  p {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 3rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 768px) {
    padding: 3rem 5%;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.1rem;
    }
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const ServiceCard = styled.div`
  background: #f8f9fa;
  padding: 2.5rem 2rem;
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #e9ecef;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-color: #ff6b6b;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

export const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: block;
`;

export const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: #2c2c2c;
  margin-bottom: 1rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const ServiceDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 1.5rem;
  min-height: 80px;
`;

export const ServiceLink = styled.span`
  color: #ff6b6b;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #ee5a24;
  }
`;
