import AOS from "aos";
import "aos/dist/aos.css";

import {
  DivPresentation,
  H1,
  DivDescription,
  P,
  Img,
} from "../styled-components/PresentationPage";
import profil from "../assets/icons/profil.jpg";

AOS.init();

export default function PresentationPage() {
  return (
    <div>
      <DivPresentation>
        <H1>Présentation</H1>
      </DivPresentation>
      <DivDescription>
        <Img src={profil} alt="Photo de profil de Gauthier Lhomme" />

        <div>
          <P
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            posuere sed lacus eget commodo. In hac habitasse platea dictumst.
            Etiam bibendum libero sem, a efficitur enim iaculis eu. Pellentesque
            ut metus elementum, volutpat turpis et, finibus metus. Nullam eros
            massa, fermentum ut finibus ultrices, vestibulum convallis dui.
            Vestibulum vel nisi dignissim, imperdiet sem ac, cursus eros. Nunc
            blandit id orci nec condimentum. I nteger quis molestie orci. Fusce
            nisl velit, malesuada eget venenatis sit amet, rhoncus id est. Sed
            sed nunc eleifend dui malesuada luctus. Nam quis ligula varius,
            facilisis leo et, pellentesque est. In odio arcu, mattis sed
            accumsan quis, ullamcorper tristique risus. Sed at lobortis libero,
            et posuere urna.
          </P>
        </div>
      </DivDescription>
    </div>
  );
}
