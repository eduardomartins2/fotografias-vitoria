import { useState, useEffect } from 'react';
import { BackToTopButton } from './BackToTop-css';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <BackToTopButton 
      onClick={scrollToTop}
      isVisible={isVisible}
      aria-label="Voltar ao topo"
    >
      ↑
    </BackToTopButton>
  );
};

export default BackToTop;
