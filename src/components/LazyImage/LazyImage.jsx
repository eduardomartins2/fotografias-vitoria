import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
`;

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${props => props.loaded ? 1 : 0};
  transition: opacity 0.5s ease;
  animation: ${fadeIn} 0.5s ease;
`;

const loadingAnimation = keyframes`
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
`;

const LazyImage = ({ src, alt, className, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <ImageContainer ref={ref} className={className}>
      {inView && (
        <>
          {!isLoaded && <Placeholder />}
          <StyledImage
            src={src}
            alt={alt}
            loaded={isLoaded}
            onLoad={handleLoad}
            {...props}
          />
        </>
      )}
    </ImageContainer>
  );
};

export default LazyImage;
