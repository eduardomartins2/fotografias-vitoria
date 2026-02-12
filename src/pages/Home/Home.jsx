import { Container } from "./home-css";
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';
import Sobre from "../../components/Sobre/Sobre";
import LazyGallery from '../../components/LazyGallery/LazyGallery';
import CTASection from '../../components/CTASection/CTASection';

export const Home = () => {
  return (
    <Container>
      <Hero />
      <Services />
      <Sobre />
      <LazyGallery />
      <CTASection />
    </Container>
  );
};
