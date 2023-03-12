import { Container, MainHeading, WorksBoxs } from "../../components";
import steps from "../../assets/work-steps.png";
import "./Works.css";
import worksData from "../../Data/WorksData";

const Works = () => {
  const Boxs = worksData.map((box) => {
    return <WorksBoxs key={box.id} image={box.image} title={box.title} content={box.content} />;
  });
  return (
    <div className='work-step'>
      <MainHeading>How It Works ? </MainHeading>
      <Container>
        <img src={steps} alt='' className='image' />
        <div className='info'>{Boxs}</div>
      </Container>
    </div>
  );
};

export default Works;
