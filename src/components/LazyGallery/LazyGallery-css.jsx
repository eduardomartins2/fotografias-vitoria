import styled from 'styled-components';

export const GallerySection = styled.section`
  padding: 3rem 5%;
  background: #f8f9fa;
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

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 0.8rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

export const GalleryItem = styled.div`
  aspect-ratio: 1;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 480px) {
    border-radius: 8px;
  }
`;
