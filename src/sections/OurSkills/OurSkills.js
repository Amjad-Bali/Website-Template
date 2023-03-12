import { Container, MainHeading } from "../../components";
import "./OurSkills.css";
import skills from "../../assets/skills.png";
import skillsData from "../../Data/SkillsData";
import OurSkillsBoxs from "../../components/OurSkillsBoxs/OurSkillsBoxs";

const OurSkills = () => {
  const Boxs = skillsData.map((box) => {
    return <OurSkillsBoxs key={box.id} name={box.name} num={box.num} />;
  });
  return (
    <div className='our-skills'>
      <MainHeading>Our Skills</MainHeading>
      <Container>
        <img src={skills} alt='' />
        <div className='skills'>{Boxs}</div>
      </Container>
    </div>
  );
};

export default OurSkills;
