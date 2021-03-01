import AOS from "aos";
import "aos/dist/aos.css";

import {
  Div,
  DivCadre,
  DivCards,
  DivSkills,
  H1,
  P,
  Li,
  Ul,
  ScrollingDiv,
  PScrolling,
  PMarquee,
  SpanMarquee,
  SpanMarquee2,
} from "../styled-components/Skills";
import skills from "../assets/list/SkillList.jsx";

AOS.init();

export default function Skills() {
  return (
    <Div>
      <DivSkills>
        <H1>Skills</H1>
      </DivSkills>
      <DivCards data-aos="zoom-in-down" data-aos-duration="1700">
        {skills.map((skill, i) => (
          <div key={i}>
            <DivCadre>
              <img src={skill.img} alt={skill.alt} />
              <P>{skill.name}</P>
            </DivCadre>
            <Ul>
              <Li>{skill.skill1}</Li>

              <Li>{skill.skill2}</Li>
              <Li>{skill.skill3}</Li>
              <Li>{skill.skill4}</Li>
            </Ul>
          </div>
        ))}
      </DivCards>
    </Div>
  );
}
