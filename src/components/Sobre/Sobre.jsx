import { AboutSection, PhotoContainer, StyledImage, AboutText, Redes } from "./sobre-css";
import vitoria from "../../assets/Sobre/Vitoria.jpeg";


const Sobre = () => {
    return (
        <AboutSection>
            <PhotoContainer>
                <StyledImage alt="Vitoria" src={vitoria} />
            </PhotoContainer>
            <AboutText>
                <h2>Sobre</h2>
                <p>Meu nome é Vitoria Martins e sou fotógrafa. A fotografia para mim é mais do que uma
                    profissão.<br /> É um estilo de vida que resolvi seguir por toda a minha jornada.</p>
                <br />
                <br />
                <p>Você pode entrar em contato comigo pelo WhatsApp ou seguir meu trabalho no Instagram:</p>
                <br />
                <Redes>
                    <a href="https://wa.me/5524992481407">WhatsApp</a><br />
                    <a href="https://www.instagram.com/vitoriamartinsfotografias">Instagram</a>
                </Redes>
            </AboutText>
        </AboutSection>
    );
};

export default Sobre;
