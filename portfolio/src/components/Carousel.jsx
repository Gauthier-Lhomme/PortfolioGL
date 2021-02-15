import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import kubo from "../assets/icons/kubo.png";
import aquagic from "../assets/icons/aquagic.png";
import blablachar from "../assets/icons/blablachar.png";

import {
  Height,
  DivProjet,
  H1,
  H2,
  Div,
  P,
} from "../styled-components/Carousel";

export default class DemoCarousel extends Component {
  render() {
    return (
      <Div>
        <DivProjet>
          <H1>Projets</H1>
        </DivProjet>
        <Height>
          <Carousel width="1200px">
            <div>
              <img src={aquagic} />
              <div className="legend">
                <H2>Aquagic</H2>
                <P>Projet Wild Code School</P>
                <P>
                  Site de référencement de carte à jouer "Magic The Gathering"
                </P>
              </div>
            </div>
            <div>
              <img src={blablachar} />
              <div className="legend">
                <H2>Blablachar</H2>
                <P>Hackathon Wild Code School Lille (48h) (Projet vainqueur)</P>
                <P>
                  Thème : Créer une application dans l'ancien temps avec les
                  technologies actuelles
                </P>
                <P>Site permettant la reservation de trajet en char</P>
              </div>
            </div>
            <div>
              <img src={kubo} />
              <div className="legend">
                <H2>Kubo</H2>
                <P>Hackathon Wild Code School Lille (72h) (Projet vainqueur)</P>
                <P>
                  Thème : Créer un outils permettant de faciliter l'accés à un
                  emplois
                </P>
                <P>
                  Kubo accompagne l'utilisateur dans la création d'un CV vidéo
                  en ligne
                </P>
              </div>
            </div>
          </Carousel>
        </Height>
      </Div>
    );
  }
}
