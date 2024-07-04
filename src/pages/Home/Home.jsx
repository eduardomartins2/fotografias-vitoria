import { Container } from ".//home-css";
import Body from '../../components/Body/Body';
import Sobre from "../../components/Sobre/Sobre";


export const Home = () => {
  return (
    <Container>
      <Sobre />
      <Body />
    </Container>
  );
};
