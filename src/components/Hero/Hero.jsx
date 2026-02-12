import { HeroSection, HeroContent, HeroTitle, HeroSubtitle, HeroDescription, CTAButton, HeroImage } from './Hero-css';
import vitoria from '../../assets/Sobre/vitoria.jpg';

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle>Vitória Martins</HeroTitle>
        <HeroSubtitle>Fotógrafa Especialista em Memórias</HeroSubtitle>
        <HeroDescription>
          Transformando momentos especiais em eternas lembranças. 
          Com mais de 5 anos de experiência, capturo a essência única 
          de cada história com sensibilidade e profissionalismo.
        </HeroDescription>
        <CTAButton href="https://wa.me/5524992481407">
          Agende sua Sessão
        </CTAButton>
      </HeroContent>
      <HeroImage>
        <img src={vitoria} alt="Vitória Martins - Fotógrafa" />
      </HeroImage>
    </HeroSection>
  );
};

export default Hero;
