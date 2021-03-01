import { DivFooter, A, P } from "../styled-components/Footer";

export default function Footer() {
  return (
    <DivFooter>
      <A href="https://www.linkedin.com/in/gauthier-lhomme/">Gauthier Lhomme</A>
      <P>{new Date().getFullYear()}</P>
    </DivFooter>
  );
}
