import "./Testimonials.css";
import { Container, TestimonialsBoxs, MainHeading } from "../../components";
import testimonialsData from "../../Data/TestimonialsData";

const Testimonials = () => {
  const Boxs = testimonialsData.map((box) => {
    return (
      <TestimonialsBoxs
        key={box.id}
        image={box.image}
        name={box.name}
        title={box.title}
        starFilled={box.starFilled}
        starEmpty={box.starEmpty}
        content={box.content}
      />
    );
  });
  return (
    <div className='testimonials'>
      <MainHeading>Testimonials</MainHeading>
      <Container>{Boxs}</Container>
    </div>
  );
};

export default Testimonials;
