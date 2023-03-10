import { Container, MainHeading, ServicesBoxs } from "../../components";
import servicesData from "../../Data/ServicesData";
import "./Services.css";

const Services = () => {
  const Boxs = servicesData.map((box) => {
    return <ServicesBoxs key={box.id} icon={box.icon} title={box.title} />;
  });
  return (
    <div className='services'>
      <MainHeading>Services</MainHeading>
      <Container>{Boxs}</Container>
    </div>
  );
};

export default Services;
