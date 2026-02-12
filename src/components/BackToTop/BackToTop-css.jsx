import styled from 'styled-components';

export const BackToTopButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: linear-gradient(45deg, #ff6b6b, #ee5a24);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.isVisible ? '1' : '0'};
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(20px)'};
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(238, 90, 36, 0.3);
  z-index: 1000;

  &:hover {
    transform: ${props => props.isVisible ? 'translateY(-3px)' : 'translateY(20px)'};
    box-shadow: 0 6px 20px rgba(238, 90, 36, 0.4);
    background: linear-gradient(45deg, #ee5a24, #ff6b6b);
  }

  &:active {
    transform: ${props => props.isVisible ? 'translateY(-1px)' : 'translateY(20px)'};
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    bottom: 20px;
    right: 20px;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    bottom: 15px;
    right: 15px;
    font-size: 0.9rem;
  }
`;
