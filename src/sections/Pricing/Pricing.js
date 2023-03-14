import { Container, Dots, MainHeading, PricingBoxs } from "../../components";
import pricingData from "../../Data/PricingData";
import "./Pricing.css";

const Pricing = () => {
  const Boxs = pricingData.map((box) => {
    return (
      <PricingBoxs
        key={box.id}
        title={box.title}
        image={box.image}
        amount={box.amount}
        time={box.time}
        featurs={box.featurs}
        AddClass={box.title == "Advanced" ? "popular" : ""}
      />
    );
  });
  return (
    <div className='pricing'>
      <Dots position='dots-up' />
      <Dots position='dots-down' />
      <MainHeading>Pricing</MainHeading>
      <Container>{Boxs}</Container>
    </div>
  );
};

export default Pricing;
