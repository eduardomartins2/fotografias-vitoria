import { CTASection, CTAContent, CTATitle, CTADescription, CTAButtons, PrimaryButton, SecondaryButton } from './CTASection-css';

const CTASectionComponent = () => {
  return (
    <CTASection>
      <CTAContent>
        <CTATitle>Pronta para Criar Memórias Inesquecíveis?</CTATitle>
        <CTADescription>
          Transforme seus momentos especiais em arte eterna. 
          Agende sua sessão fotográfica hoje mesmo e receba um brinde especial!
        </CTADescription>
        <CTAButtons>
          <PrimaryButton href="https://wa.me/5524992481407?text=Olá!%20Gostaria%20de%20agendar%20uma%20sessão%20fotográfica">
            <span>📱</span> Agendar Agora
          </PrimaryButton>
          <SecondaryButton href="https://www.instagram.com/vitoriamartinsfotografias">
            <span>📷</span> Ver Portfólio
          </SecondaryButton>
        </CTAButtons>
      </CTAContent>
    </CTASection>
  );
};

export default CTASectionComponent;
