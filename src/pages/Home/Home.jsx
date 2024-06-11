import { Container, Head, Title, Fotografia, StyledLink } from ".//home-css";
import Navbar from "../../components/Navbar/Navbar";
import Body from '../../components/Body/Body';
import Footer from "../../components/Footer/Footer";


export const Home = () => {
  return (
    <Container>
      <StyledLink to="/">
        <Head>
          <Title>PORTFÓLIO</Title>
          <Fotografia>Vitoria Martins</Fotografia>
        </Head>
      </StyledLink>
      <Navbar />
      <Body />
      <Footer />
    </Container>
    
  );
};
