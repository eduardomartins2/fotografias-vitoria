import { AboutSection, PhotoContainer, StyledImage, AboutText, Redes, StatsContainer, StatItem } from "./sobre-css";
import vitoria from "../../assets/Sobre/vitoria.jpg";
import instagram from "../../assets/Sobre/instagram.svg";
import whatsapp from "../../assets/Sobre/whatsapp.svg";

const Sobre = () => {
    return (
        <AboutSection>
            <PhotoContainer>
                <StyledImage alt="Vitoria" src={vitoria} />
            </PhotoContainer>
            <AboutText>
                <h2>Sobre Mim</h2>
                <p>
                    Olá! Sou Vitória Martins, uma fotógrafa apaixonada por capturar 
                    <strong> momentos que contam histórias </strong>e emocionam gerações.
                </p>
                <p>
                    Com mais de 5 anos de experiência, especializei-me em 
                    <strong> fotografia de família, newborn e ensaios emocionantes </strong>
                    que transformam simples instantâneos em memórias eternas.
                </p>
                <p>
                    Minha missão é mais do que apenas clicar um botão. 
                    É criar uma experiência confortável e divertida, 
                    onde cada pessoa pode ser autêntica e mostrar sua verdadeira essência.
                </p>
                
                <StatsContainer>
                    <StatItem>
                        <strong>500+</strong>
                        <span>Famílias Felizes</span>
                    </StatItem>
                    <StatItem>
                        <strong>1000+</strong>
                        <span>Sessões Realizadas</span>
                    </StatItem>
                    <StatItem>
                        <strong>5★</strong>
                        <span>Avaliação Média</span>
                    </StatItem>
                </StatsContainer>

                <p style={{ marginTop: '2rem' }}>
                    <strong>Pronta para criar memórias inesquecíveis?</strong>
                    <br />
                    Entre em contato e vamos conversar sobre sua sessão dos sonhos!
                </p>
                
                <Redes>
                    <a href="https://wa.me/5524992481407" target="_blank" rel="noopener noreferrer">
                        <img src={whatsapp} alt="WhatsApp" style={{ width: '48px', height: '48px' }} />
                    </a>
                    <a href="https://www.instagram.com/vitoriamartinsfotografias" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="Instagram" style={{ width: '48px', height: '48px' }} />
                    </a>
                </Redes>
            </AboutText>
        </AboutSection>
    );
};

export default Sobre;
