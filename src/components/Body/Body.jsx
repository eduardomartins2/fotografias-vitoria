import { Image, Box } from "./body-css";

import img1 from "../../assets/Infantil/infantil_1.JPG";
import img2 from "../../assets/Infantil/infantil_2.JPG";
import img3 from "../../assets/Infantil/infantil_3.JPG";
import img4 from "../../assets/Infantil/infantil_4.JPG";
import img5 from "../../assets/Infantil/infantil_5.JPG";
import img6 from "../../assets/Infantil/infantil_6.JPG";


const Body = () => {
    return (
        <Image>
            <Box><img alt="Imagem 1" src={img1} /></Box>
            <Box><img alt="Imagem 2" src={img2} /></Box>
            <Box><img alt="Imagem 3" src={img3} /></Box>
            <Box><img alt="Imagem 4" src={img4} /></Box>
            <Box><img alt="Imagem 5" src={img5} /></Box>
            <Box><img alt="Imagem 6" src={img6} /></Box>
        </Image>
    );
};

export default Body;