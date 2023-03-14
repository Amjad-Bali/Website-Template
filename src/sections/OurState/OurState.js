import { Container, StateBoxs } from "../../components";
import stateData from "../../Data/StateData";
import "./OurState.css";

const OurState = () => {
  const Boxs = stateData.map((box) => {
    return <StateBoxs key={box.id} icon={box.icon} number={box.number} text={box.text} />;
  });
  return (
    <div className='stats'>
      <h2>Our Awesome Stats</h2>
      <Container>{Boxs}</Container>
    </div>
  );
};

export default OurState;
