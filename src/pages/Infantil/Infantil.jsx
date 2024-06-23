import { Image, Box } from "../../components/Body/body-css";

import infantil1 from "../../assets/Infantil/infantil_1.JPG";
import infantil2 from "../../assets/Infantil/infantil_2.JPG";
import infantil3 from "../../assets/Infantil/infantil_3.JPG";
import infantil4 from "../../assets/Infantil/infantil_4.JPG";
import infantil5 from "../../assets/Infantil/infantil_5.JPG";
import infantil6 from "../../assets/Infantil/infantil_6.JPG";
import infantil7 from "../../assets/Infantil/infantil_7.JPG";
import infantil8 from "../../assets/Infantil/infantil_8.JPG";
import infantil9 from "../../assets/Infantil/infantil_9.JPG";
import infantil10 from "../../assets/Infantil/infantil_10.JPG";
import infantil11 from "../../assets/Infantil/infantil_11.JPG";
import infantil12 from "../../assets/Infantil/infantil_12.JPG";
import infantil13 from "../../assets/Infantil/infantil_13.JPG";
import infantil14 from "../../assets/Infantil/infantil_14.JPG";
import infantil15 from "../../assets/Infantil/infantil_15.JPG";
import infantil16 from "../../assets/Infantil/infantil_16.JPG";
import infantil17 from "../../assets/Infantil/infantil_17.JPG";
import infantil18 from "../../assets/Infantil/infantil_18.JPG";
import infantil19 from "../../assets/Infantil/infantil_19.JPG";
import infantil20 from "../../assets/Infantil/infantil_20.JPG";
import infantil21 from "../../assets/Infantil/infantil_21.JPG";
import infantil22 from "../../assets/Infantil/infantil_22.JPG";
import infantil23 from "../../assets/Infantil/infantil_23.JPG";
import infantil24 from "../../assets/Infantil/infantil_24.JPG";

const images = [
  { src: infantil1, alt: "infantil1" },
  { src: infantil2, alt: "infantil2" },
  { src: infantil3, alt: "infantil3" },
  { src: infantil4, alt: "infantil4" },
  { src: infantil5, alt: "infantil5" },
  { src: infantil6, alt: "infantil6" },
  { src: infantil7, alt: "infantil7" },
  { src: infantil8, alt: "infantil8" },
  { src: infantil9, alt: "infantil9" },
  { src: infantil10, alt: "infantil10" },
  { src: infantil11, alt: "infantil11" },
  { src: infantil12, alt: "infantil12" },
  { src: infantil13, alt: "infantil13" },
  { src: infantil14, alt: "infantil14" },
  { src: infantil15, alt: "infantil15" },
  { src: infantil16, alt: "infantil16" },
  { src: infantil17, alt: "infantil17" },
  { src: infantil18, alt: "infantil18" },
  { src: infantil19, alt: "infantil19" },
  { src: infantil20, alt: "infantil20" },
  { src: infantil21, alt: "infantil21" },
  { src: infantil22, alt: "infantil22" },
  { src: infantil23, alt: "infantil23" },
  { src: infantil24, alt: "infantil24" },
];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const Infantil = () => {
  const shuffledImages = shuffleArray([...images]);

  return (
    <Image>
      {shuffledImages.map((image, index) => (
        <Box key={index}>
          <img alt={image.alt} src={image.src} />
        </Box>
      ))}
    </Image>
  );
};
