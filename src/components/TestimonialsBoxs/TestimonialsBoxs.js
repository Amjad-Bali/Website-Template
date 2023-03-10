import "./TestimonialsBoxs.css";
import { FaStar, FaRegStar } from "react-icons/fa";

const TestimonialsBoxs = (props) => {
  let starfilled = [];
  const starFilled = () => {
    for (let index = 0; index < props.starFilled; index++) {
      starfilled.push(
        <i className='filled' key={index}>
          <FaStar />
        </i>
      );
    }
    return starfilled;
  };
  let starempty = [];
  const starEmpty = () => {
    for (let index = 0; index < props.starEmpty; index++) {
      starempty.push(
        <i className='' key={index}>
          <FaRegStar />
        </i>
      );
    }
    return starempty;
  };
  return (
    <div className='box'>
      <img src={props.image} alt='' />
      <h3>{props.name}</h3>
      <span className='title'>{props.title}</span>
      <div className='rate'>
        {starFilled()}
        {starEmpty()}
      </div>
      <p>{props.content}</p>
    </div>
  );
};

export default TestimonialsBoxs;
