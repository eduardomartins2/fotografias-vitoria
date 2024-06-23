import { Image, Box } from "../../components/Body/body-css";

import familia1 from "../../assets/Familia/familia_1.JPG";
import familia2 from "../../assets/Familia/familia_2.JPG";
import familia3 from "../../assets/Familia/familia_3.JPG";
import familia4 from "../../assets/Familia/familia_4.JPG";
import familia5 from "../../assets/Familia/familia_5.JPG";
import familia6 from "../../assets/Familia/familia_6.JPG";
import familia7 from "../../assets/Familia/familia_7.JPG";
import familia8 from "../../assets/Familia/familia_8.JPG";

export const Familia = () => {
  return (
    <Image>
      <Box> <img alt="familia1" src={familia1} /></Box>
      <Box> <img alt="familia2" src={familia2} /></Box>
      <Box> <img alt="familia3" src={familia3} /></Box>
      <Box> <img alt="familia4" src={familia4} /></Box>
      <Box> <img alt="familia5" src={familia5} /></Box>
      <Box> <img alt="familia6" src={familia6} /></Box>
      <Box> <img alt="familia7" src={familia7} /></Box>
      <Box> <img alt="familia8" src={familia8} /></Box>
    </Image>
  );
};
