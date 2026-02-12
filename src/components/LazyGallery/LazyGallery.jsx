import { GallerySection, GalleryGrid, GalleryItem } from './LazyGallery-css';
import LazyImage from '../LazyImage/LazyImage';

import home1 from '../../assets/Home/home_1.jpeg';
import home2 from '../../assets/Home/home_2.jpg';
import home3 from '../../assets/Home/home_3.jpg';
import home4 from '../../assets/Home/home_4.jpg';
import home5 from '../../assets/Home/home_5.JPG';
import home6 from '../../assets/Home/home_6.JPG';
import home7 from '../../assets/Home/home_7.JPG';
import home8 from '../../assets/Home/home_8.JPG';
import home9 from '../../assets/Home/home_9.JPG';
import home10 from '../../assets/Home/home_10.JPG';
import home11 from '../../assets/Home/home_11.JPG';
import home12 from '../../assets/Home/home_12.JPG';

const LazyGallery = () => {
  const images = [
    { id: 1, src: home1, alt: 'Fotografia profissional' },
    { id: 2, src: home2, alt: 'Sessão fotográfica' },
    { id: 3, src: home3, alt: 'Retrato profissional' },
    { id: 4, src: home4, alt: 'Fotografia artística' },
    { id: 5, src: home5, alt: 'Momento especial' },
    { id: 6, src: home6, alt: 'Memória eterna' },
    { id: 7, src: home7, alt: 'Emoção capturada' },
    { id: 8, src: home8, alt: 'Luz e sombra' },
    { id: 9, src: home9, alt: 'História visual' },
    { id: 10, src: home10, alt: 'Instantâneo único' },
    { id: 11, src: home11, alt: 'Beleza natural' },
    { id: 12, src: home12, alt: 'Expressão autêntica' }
  ];

  return (
    <GallerySection>
      <h2>Nossos Trabalhos</h2>
      <p>Um pouco da nossa paixão em transformar momentos em arte</p>
      <GalleryGrid>
        {images.map((image) => (
          <GalleryItem key={image.id}>
            <LazyImage 
              src={image.src} 
              alt={image.alt}
            />
          </GalleryItem>
        ))}
      </GalleryGrid>
    </GallerySection>
  );
};

export default LazyGallery;
