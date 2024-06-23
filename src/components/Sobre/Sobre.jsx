import { AboutSection, PhotoContainer, StyledImage, AboutText } from "./sobre-css";
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
                    profissão. É um estilo de vida que resolvi seguir por toda a minha jornada.</p>
            </AboutText>
        </AboutSection>
    );
};

export default Sobre;
