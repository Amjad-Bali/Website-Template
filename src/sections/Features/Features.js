import { Container, FeaturesBoxs, MainHeading } from "../../components";
import featuresData from "../../Data/FeaturesData";
import "./Features.css";

const Features = () => {
  const Boxs = featuresData.map((box) => {
    return <FeaturesBoxs key={box.id} image={box.image} title={box.title} content={box.content} />;
  });
  return (
    <div className='features'>
      <MainHeading>Features</MainHeading>
      <Container>{Boxs}</Container>
    </div>
  );
};

export default Features;
