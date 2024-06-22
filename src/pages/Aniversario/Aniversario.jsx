import { Image, Box } from "../../components/Body/body-css";

import aniversario1 from "../../assets/Aniversario/aniversario_1.JPG";
import aniversario2 from "../../assets/Aniversario/aniversario_2.JPG";
import aniversario3 from "../../assets/Aniversario/aniversario_3.JPG";
import aniversario4 from "../../assets/Aniversario/aniversario_4.JPG";
import aniversario5 from "../../assets/Aniversario/aniversario_5.JPG";
import aniversario6 from "../../assets/Aniversario/aniversario_6.JPG";
import aniversario7 from "../../assets/Aniversario/aniversario_7.JPG";

export const Aniversario = () => {
  return (
    <Image>
      <Box><img alt="aniversario1" src={aniversario1} /></Box>
      <Box><img alt="aniversario2" src={aniversario2} /></Box>
      <Box><img alt="aniversario3" src={aniversario3} /></Box>
      <Box><img alt="aniversario4" src={aniversario4} /></Box>
      <Box><img alt="aniversario5" src={aniversario5} /></Box>
      <Box><img alt="aniversario6" src={aniversario6} /></Box>
      <Box><img alt="aniversario7" src={aniversario7} /></Box>
    </Image>    
  );
};
