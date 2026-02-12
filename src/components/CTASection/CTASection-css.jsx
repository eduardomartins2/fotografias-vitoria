import styled from 'styled-components';

export const CTASection = styled.section`
  padding: 5rem 5%;
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.05)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    padding: 3rem 5%;
  }
`;

export const CTAContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
`;

export const CTATitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const CTADescription = styled.p`
  font-size: 1.3rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 2.5rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const CTAButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.5rem;
  background: white;
  color: #ff6b6b;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
    background: #f8f9fa;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.9rem 2rem;
  }
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.5rem;
  background: transparent;
  color: white;
  text-decoration: none;
  border: 2px solid white;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    background: white;
    color: #ff6b6b;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.9rem 2rem;
  }
`;
